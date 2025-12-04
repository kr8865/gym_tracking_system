import React from 'react';

const InsightsBox = ({ title, message, icon }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 rounded-lg p-4 mb-6 shadow-md animate-fadeIn">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
          <p className="text-base font-medium text-indigo-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default InsightsBox;
