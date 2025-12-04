import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import { motion } from 'framer-motion';

// Weight Progress Chart
export const WeightProgressChart = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Weight Progress</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="date" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#FFF',
            }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: '#3B82F6', r: 5 }}
            activeDot={{ r: 7 }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

// Strength Progress Chart
export const StrengthProgressChart = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Strength Progress</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="week" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#FFF',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="bench"
            stroke="#EF4444"
            strokeWidth={2}
            dot={{ r: 4 }}
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="squat"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            animationDuration={1000}
            animationDelay={100}
          />
          <Line
            type="monotone"
            dataKey="deadlift"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ r: 4 }}
            animationDuration={1000}
            animationDelay={200}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

// Weekly Volume Chart
export const WeeklyVolumeChart = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Workout Volume</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F59E0B" stopOpacity={1} />
              <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="day" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '8px',
              color: '#FFF',
            }}
          />
          <Bar
            dataKey="volume"
            fill="url(#colorVolume)"
            radius={[12, 12, 0, 0]}
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

// Attendance Heatmap
export const AttendanceHeatmap = ({ data }) => {
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Gym Attendance</h3>
      <div className="flex flex-col gap-2">
        {weeks.map((week, weekIdx) => (
          <motion.div
            key={weekIdx}
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: weekIdx * 0.05 }}
          >
            {week.map((day, dayIdx) => (
              <motion.div
                key={dayIdx}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded transition-all ${
                  day.attended === 1
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                title={`${day.date}: ${day.attended ? 'Attended' : 'Missed'}`}
              />
            ))}
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Attended</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>Missed</span>
        </div>
      </div>
    </motion.div>
  );
};
