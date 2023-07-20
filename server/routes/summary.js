let express = require('express')
let requireAuth = require("../middleware/requireAuth.js")

// controller functions
const { getSummary, getSummaryById, getSummaryHistory } = require('../controllers/summaryController.js')

const router = express.Router()

// require auth for all routes
router.use(requireAuth)

// GET a SUMMARY
router.get('/', getSummary);

// GET a SUMMARY history
router.get('/my', getSummaryHistory);

// GET a SUMMARY by ID
router.get('/:id', getSummaryById);


module.exports = router