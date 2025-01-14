const Course = require('../Models/CourseModel');

const getCourses = async (req, res) => {
    const courses = await Course.find({}).sort({createdAt: -1});

    res.status(200).json(courses);
}


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

module.exports = {
    createCourse
}

// update a workout