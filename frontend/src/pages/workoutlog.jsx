import React, { useState, useEffect, useContext } from 'react';
import { Plus, Save, Clock } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const WorkoutLog = () => {
    const { user } = useContext(AuthContext);
    const [exercises, setExercises] = useState([{ name: '', sets: '', reps: '', weight: '' }]);
    const [duration, setDuration] = useState('');
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/member/workouts', {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            const data = await res.json();
            setHistory(data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    const addExercise = () => {
        setExercises([...exercises, { name: '', sets: '', reps: '', weight: '' }]);
    };

    const updateExercise = (index, field, value) => {
        const newExercises = [...exercises];
        newExercises[index][field] = value;
        setExercises(newExercises);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/member/workout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    exercises,
                    durationMinutes: duration,
                }),
            });

            if (res.ok) {
                alert('Workout logged!');
                setExercises([{ name: '', sets: '', reps: '', weight: '' }]);
                setDuration('');
                fetchHistory();
            }
        } catch (error) {
            console.error('Error logging workout:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Log Form */}
                <div>
                    <h1 className="text-3xl font-bold mb-6">Log Workout</h1>
                    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6">
                        <div className="space-y-4">
                            {exercises.map((ex, index) => (
                                <div key={index} className="bg-gray-700/50 p-4 rounded-xl space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Exercise Name (e.g. Bench Press)"
                                        className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                                        value={ex.name}
                                        onChange={(e) => updateExercise(index, 'name', e.target.value)}
                                        required
                                    />
                                    <div className="grid grid-cols-3 gap-3">
                                        <input
                                            type="number"
                                            placeholder="Sets"
                                            className="bg-gray-700 p-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                                            value={ex.sets}
                                            onChange={(e) => updateExercise(index, 'sets', e.target.value)}
                                            required
                                        />
                                        <input
                                            type="number"
                                            placeholder="Reps"
                                            className="bg-gray-700 p-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                                            value={ex.reps}
                                            onChange={(e) => updateExercise(index, 'reps', e.target.value)}
                                            required
                                        />
                                        <input
                                            type="number"
                                            placeholder="Kg"
                                            className="bg-gray-700 p-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                                            value={ex.weight}
                                            onChange={(e) => updateExercise(index, 'weight', e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button" onClick={addExercise} className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:text-blue-300">
                            <Plus className="w-4 h-4" /> Add Exercise
                        </button>

                        <div>
                            <label className="block text-gray-400 mb-1 text-sm">Duration (mins)</label>
                            <input
                                type="number"
                                className="w-full bg-gray-700 p-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                            <Save className="w-5 h-5" /> Save Workout
                        </button>
                    </form>
                </div>

                {/* History */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Recent Workouts</h2>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                        {history.map((workout) => (
                            <div key={workout._id} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="text-gray-400 text-sm flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {new Date(workout.date).toLocaleDateString()}
                                    </div>
                                    <span className="text-sm font-bold text-blue-400">{workout.durationMinutes} min</span>
                                </div>
                                <div className="space-y-2">
                                    {workout.exercises.map((ex, i) => (
                                        <div key={i} className="flex justify-between text-sm">
                                            <span className="font-medium">{ex.name}</span>
                                            <span className="text-gray-400">{ex.sets} x {ex.reps} @ {ex.weight}kg</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WorkoutLog;
