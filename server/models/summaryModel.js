const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    content: {
        type: Object,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Summary', summarySchema)