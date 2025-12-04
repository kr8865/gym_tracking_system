import React from 'react';
import { strengthProgressData } from '../../data/dummyData';

const StrengthChart = () => {
  const maxStrength = Math.max(
    ...strengthProgressData.map(d => Math.max(d.bench, d.squat, d.deadlift))
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-slideInUp">
      <div className="h-64 flex items-end justify-between gap-4">
        {strengthProgressData.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1">
            {/* Bench */}
            <div
              className="w-full bg-red-400 rounded-t-lg hover:bg-red-500 transition-all duration-300 cursor-pointer group relative"
              style={{
                height: `${(item.bench / maxStrength) * 100}%`,
                minHeight: '5px',
                animation: `slideInUp 0.5s ease-out ${idx * 0.05}s backwards`,
              }}
              title={`Bench: ${item.bench}kg`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                B: {item.bench}
              </div>
            </div>

            {/* Squat */}
            <div
              className="w-full bg-green-400 rounded-t-lg hover:bg-green-500 transition-all duration-300 cursor-pointer group relative"
              style={{
                height: `${(item.squat / maxStrength) * 100}%`,
                minHeight: '5px',
                animation: `slideInUp 0.5s ease-out ${(idx * 0.05) + 0.1}s backwards`,
              }}
              title={`Squat: ${item.squat}kg`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                S: {item.squat}
              </div>
            </div>

            {/* Deadlift */}
            <div
              className="w-full bg-purple-400 rounded-t-lg hover:bg-purple-500 transition-all duration-300 cursor-pointer group relative"
              style={{
                height: `${(item.deadlift / maxStrength) * 100}%`,
                minHeight: '5px',
                animation: `slideInUp 0.5s ease-out ${(idx * 0.05) + 0.2}s backwards`,
              }}
              title={`Deadlift: ${item.deadlift}kg`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                D: {item.deadlift}
              </div>
            </div>

            <span className="text-xs text-gray-500 mt-2">{item.week}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-6 justify-center mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded"></div>
          <span>Bench Press</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded"></div>
          <span>Squat</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-400 rounded"></div>
          <span>Deadlift</span>
        </div>
      </div>
    </div>
  );
};

export default StrengthChart;
