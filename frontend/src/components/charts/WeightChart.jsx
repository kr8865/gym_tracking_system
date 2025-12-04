import React from 'react';
import { weightProgressData } from '../../data/dummyData';

const WeightChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-slideInUp">
      <div className="h-64 flex items-end justify-between gap-2">
        {weightProgressData.map((item, idx) => {
          const maxWeight = Math.max(...weightProgressData.map(d => d.weight));
          const minWeight = Math.min(...weightProgressData.map(d => d.weight));
          const range = maxWeight - minWeight;
          const normalizedHeight = ((item.weight - minWeight) / range) * 100;
          
          return (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer group relative"
              style={{
                height: `${normalizedHeight}%`,
                minHeight: '20px',
                animation: `slideInUp 0.5s ease-out ${idx * 0.05}s backwards`,
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.weight}kg
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-8">
        {weightProgressData.map((item, idx) => (
          idx % 2 === 0 && <span key={idx}>{item.date}</span>
        ))}
      </div>
    </div>
  );
};

export default WeightChart;
