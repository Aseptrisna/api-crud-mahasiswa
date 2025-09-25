// src/route/student.js
const express = require('express');
const router = express.Router();
const studentController = require('../controller/student-controller');

router.post('/', studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:guid', studentController.getStudentByGuid);
router.put('/:guid', studentController.updateStudent);
router.delete('/:guid', studentController.deleteStudent);

module.exports = router;