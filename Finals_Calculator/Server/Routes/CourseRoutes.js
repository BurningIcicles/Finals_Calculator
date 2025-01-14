const express = require('express');
const router = express.Router();
const {
    createCourse
} = require('../Controllers/CourseController');

router.get('/', (req, res) => {
     res.json({message: 'GET ALL COURSES'});
});

router.get('/:id', (req, res) => {
    res.json({message: 'GET SINGLE COURSE'});
});

router.post('/', createCourse);

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE A COURSE'});
});

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE A COURSE'});
});

module.exports = router;