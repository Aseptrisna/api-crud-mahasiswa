// src/model/student-model.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    guid: {
        type: String,
        required: true,
        unique: true,
    },
    nim: {
        type: String,
        required: true,
        unique: true,
    },
    nama: {
        type: String,
        required: true,
    },
    jurusan: {
        type: String,
        required: true,
    },
    angkatan: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;