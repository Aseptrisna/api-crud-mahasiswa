// src/controller/student-controller.js
const studentService = require("../service/student-service");
const { sendSuccess, sendError } = require("../util/response");
const logger = require("../util/logger");
const { v4: uuidv4 } = require("uuid");


const createStudent = async (req, res) => {
  try {
    console.log(req.body)
    const year = new Date().getFullYear();
    const guid = `STUDENT-${uuidv4()}-${year}`;
    const studentData = {
      guid,
      ...req.body,
    };
    const student = await studentService.createStudent(studentData);
    sendSuccess(res, student, "Student created successfully", 201);
  } catch (error) {
    logger.error(error);
    sendError(res, error.message, 400);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    sendSuccess(res, students, "Students retrieved successfully");
  } catch (error) {
    logger.error(error);
    sendError(res, "Failed to retrieve students");
  }
};

const getStudentByGuid = async (req, res) => {
  try {
    const student = await studentService.getStudentByGuid(req.params.guid);
    if (!student) {
      return sendError(res, "Student not found", 404);
    }
  
    sendSuccess(res, student, "Student retrieved successfully");
  } catch (error) {
    logger.error(error);
    sendError(res, "Failed to retrieve student");
  }
};

const updateStudent = async (req, res) => {
  try {
    console.log(req.body)
    const student = await studentService.updateStudentByGuid(
      req.params.guid,
      req.body
    );
    if (!student) {
      return sendError(res, "Student not found", 404);
    }
    
    console.log(student)
    sendSuccess(res, student, "Student updated successfully");
  } catch (error) {
    logger.error(error);
    sendError(res, error.message, 400);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentService.deleteStudentByGuid(req.params.guid);
    if (!student) {
      return sendError(res, "Student not found", 404);
    }
    sendSuccess(res, null, "Student deleted successfully");
  } catch (error) {
    logger.error(error);
    sendError(res, "Failed to delete student");
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentByGuid,
  updateStudent,
  deleteStudent,
};
