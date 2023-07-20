let express = require('express')
let requireAuth = require("../middleware/requireAuth.js")

// controller functions
let loginUser = require('../controllers/userController.js')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// login route
router.post('/login', loginUser)


module.exports = router