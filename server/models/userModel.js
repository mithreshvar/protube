const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    history: {
        type: Array,
        required: true,
        default: []
    },
    credits: {
        type: Number,
        required: true
    }
})

// static login method
userSchema.statics.login = async function (uid) {

    const user = await this.findOne({ uid })
    if (!user) {
        const user = await this.create({ uid, credits:100 })
        return user
    }

    return user
}

module.exports = mongoose.model('User', userSchema)