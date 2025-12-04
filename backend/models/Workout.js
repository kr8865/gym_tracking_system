const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sets: { type: Number },
    reps: { type: Number },
    weight: { type: Number },
    notes: String,
});

const workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    exercises: [exerciseSchema],
    durationMinutes: { type: Number },
    notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);
