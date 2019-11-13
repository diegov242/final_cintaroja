const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: Number,
    gender: {
        type: String,
        enum: ["M", "m", "F", "f"]
    },
    is_active: {
        type: Boolean,
        default: true
    }
})

const User = mongoose.model("User", userSchema)


module.exports = User