const express = require('express');
const router = express.Router();
const {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
} = require('../Controllers/CourseController');

router.get('/', getCourses)

router.get('/:id', getCourse)

router.post('/', createCourse);

router.delete('/:id', deleteCourse);

router.patch('/:id', updateCourse);

module.exports = router;