const User = require('../models/userModel.js')

const loginUser = async (req, res) => {
    const { uid } = req.body

    try {
        const user = await User.login(uid)

        res.status(200).json({ uid, credits: user.credits })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports =  loginUser 