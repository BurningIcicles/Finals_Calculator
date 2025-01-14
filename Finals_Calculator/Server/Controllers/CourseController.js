const Course = require('../Models/CourseModel');
const mongoose = require('mongoose');

const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1});

    res.status(200).json(courses);
};

const getCourse = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    const course = await Course.findById(id);
    if (!course) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    res.status(200).json(course);
};


const createCourse = async (req, res) => {
    const {name} = req.body;

    try {
        const course = await Course.create({name});
        res.status(200).json(course);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

// delete a course
const deleteCourse = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    const course = await Course.findOneAndDelete({
        _id: id
    });

    if (!course) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    res.status(200).json(course);
};

const updateCourse = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    const course = await Course.findOneAndUpdate({
        _id: id
    }, {
        ...req.body
    });

    if (!course) {
        res.status(404).json({error: 'No course found'});
        return;
    }

    res.status(200).json(course);
};

module.exports = {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
}