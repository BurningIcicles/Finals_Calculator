require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const coursesRoutes = require('./Routes/CourseRoutes');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
     console.log(req.path, req.method, req.url);
     next();
});

app.use('/api/courses', coursesRoutes);

mongoose.connect(process.env.ATLAS_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`connected to db & listening on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error('Connecting to database failed', err);
});
