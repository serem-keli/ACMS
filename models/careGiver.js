const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    assignedResidents: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Resident', 
    }],
})

const CareGiver = mongoose.model("CareGiver", schema)