import React from 'react';
import { attendanceData } from '../../data/dummyData';

const StreakHeatmap = () => {
  const weeks = [];
  for (let i = 0; i < attendanceData.length; i += 7) {
    weeks.push(attendanceData.slice(i, i + 7));
  }

  const getStreak = () => {
    let streak = 0;
    for (let i = attendanceData.length - 1; i >= 0; i--) {
      if (attendanceData[i].attended === 1) streak++;
      else break;
    }
    return streak;
  };

  const currentStreak = getStreak();

  const getColor = (attended) => {
    if (attended === 1) return 'bg-green-500 hover:bg-green-600';
    return 'bg-gray-200 hover:bg-gray-300';
  };

  const getTooltip = (attended, date) => {
    return attended === 1 ? `Attended on ${date}` : `Missed on ${date}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-slideInUp">
      <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
        <p className="text-sm font-semibold text-gray-600">Current Streak</p>
        <p className="text-3xl font-bold text-green-600">{currentStreak} days 🔥</p>
      </div>

      <div className="flex flex-col gap-3">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex gap-1">
            {week.map((day, dayIdx) => (
              <div
                key={dayIdx}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded transition-all duration-200 cursor-pointer group relative ${getColor(day.attended)}`}
                style={{
                  animation: `slideInUp 0.5s ease-out ${(weekIdx * 7 + dayIdx) * 0.03}s backwards`,
                }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {getTooltip(day.attended, day.date)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Attended</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span>Missed</span>
        </div>
      </div>
    </div>
  );
};

export default StreakHeatmap;
