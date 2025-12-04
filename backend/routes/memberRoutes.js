const express = require('express');
const router = express.Router();
const {
    getPlans,
    purchasePlan,
    markAttendance,
    logWorkout,
    getWorkouts,
} = require('../controllers/memberController');
const { protect } = require('../middleware/authMiddleware');
