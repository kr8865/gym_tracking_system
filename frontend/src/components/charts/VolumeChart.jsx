import React from 'react';
import { volumeData } from '../../data/dummyData';

const VolumeChart = () => {
  const maxVolume = Math.max(...volumeData.map(d => d.volume));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-slideInUp">
      <div className="h-64 flex items-end justify-between gap-3">
        {volumeData.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-t-lg hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 cursor-pointer group relative"
            style={{
              height: `${(item.volume / maxVolume) * 100}%`,
              minHeight: '20px',
              animation: `slideInUp 0.5s ease-out ${idx * 0.08}s backwards`,
            }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {(item.volume / 1000).toFixed(1)}k
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-8">
        {volumeData.map((item, idx) => (
          <span key={idx}>{item.day.slice(0, 3)}</span>
        ))}
      </div>
      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-orange-600">Total Weekly Volume:</span> {(volumeData.reduce((acc, d) => acc + d.volume, 0) / 1000).toFixed(1)}k kg
        </p>
      </div>
    </div>
  );
};

export default VolumeChart;
