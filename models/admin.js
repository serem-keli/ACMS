const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

})

const Admin = mongoose.model("Admin", schema)