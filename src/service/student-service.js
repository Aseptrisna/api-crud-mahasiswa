// src/service/student-service.js
const Student = require('../model/student-model');

const createStudent = async (studentData) => {
    const student = new Student(studentData);
    return await student.save();
};

const getAllStudents = async () => {
    return await Student.find();
};

const getStudentByGuid = async (guid) => {
    return await Student.find({ guid });
};

const updateStudentByGuid = async (guid, studentData) => {
   // return await Student.findOneAndUpdate(guid, studentData, { new: true });
    console.log(guid);
    console.log(studentData);
    return await Student.findOneAndUpdate({ guid }, studentData, { new: true });
};

const deleteStudentByGuid = async (guid) => {
    return await Student.findOneAndDelete({ guid });
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentByGuid,
    updateStudentByGuid,
    deleteStudentByGuid,
};
