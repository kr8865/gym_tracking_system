import React from 'react';
import InsightsBox from './InsightsBox';
import WeightChart from './charts/WeightChart';
import StrengthChart from './charts/StrengthChart';
import VolumeChart from './charts/VolumeChart';
import StreakHeatmap from './charts/StreakHeatmap';
import { insightsData } from '../data/dummyData';

const ProgressDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            💪 Progress Dashboard
          </h1>
          <p className="text-lg text-gray-600">Track your gym journey and celebrate your wins!</p>
        </div>

        {/* Weight Progress Section */}
        <div className="mb-12 animate-slideInUp" style={{ animationDelay: '0.1s' }}>
          <InsightsBox
            title="Weight Progress"
            message={insightsData.weight}
            icon="⚖️"
          />
          <WeightChart />
        </div>

        {/* Strength Progress Section */}
        <div className="mb-12 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          <InsightsBox
            title="Strength Progress"
            message={insightsData.strength}
            icon="🏋️"
          />
          <StrengthChart />
        </div>

        {/* Weekly Volume Section */}
        <div className="mb-12 animate-slideInUp" style={{ animationDelay: '0.3s' }}>
          <InsightsBox
            title="Weekly Workout Volume"
            message={insightsData.volume}
            icon="📊"
          />
          <VolumeChart />
        </div>

        {/* Attendance Streak Section */}
        <div className="mb-12 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          <InsightsBox
            title="Gym Attendance"
            message={insightsData.attendance}
            icon="📅"
          />
          <StreakHeatmap />
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-slideInUp" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Total Weight Lost</p>
            <p className="text-3xl font-bold text-blue-600">6.5 kg</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Strength Gain</p>
            <p className="text-3xl font-bold text-red-600">+18 kg</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Weekly Volume</p>
            <p className="text-3xl font-bold text-orange-600">98.8k</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-600 text-sm mb-2">Attendance Rate</p>
            <p className="text-3xl font-bold text-green-600">96.7%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
