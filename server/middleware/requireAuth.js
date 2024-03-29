// const User = require('../models/userModel')
let auth = require('../Firebase.js')

const requireAuth = async (req, res, next) => {
    // verify user is authenticated
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' })
    }

    const token = authorization.split(' ')[1]

    try {
        let decodedToken = await auth.verifyIdToken(token)
        req.body = {...req.body, uid: decodedToken.uid}
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Request is not authorized' })
    }
}

module.exports = requireAuth