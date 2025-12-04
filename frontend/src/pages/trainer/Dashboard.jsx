import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Target, Calendar } from 'lucide-react';

const TrainerDashboard = () => {
  const [activeTab, setActiveTab] = useState('clients');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-2">Trainer Dashboard</h1>
            <p className="text-lg text-gray-100">Manage your clients and their progress</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, label: 'Total Clients', value: '18', color: 'from-blue-500 to-blue-600' },
            { icon: BookOpen, label: 'Plans Created', value: '42', color: 'from-purple-500 to-purple-600' },
            { icon: Target, label: 'Goals Achieved', value: '28', color: 'from-green-500 to-green-600' },
            { icon: Calendar, label: 'Sessions This Week', value: '12', color: 'from-orange-500 to-orange-600' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -5 }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-xl`}
              >
                <Icon className="mb-4" size={32} />
                <p className="text-sm opacity-90 mb-2">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-8 overflow-x-auto">
          {[
            { id: 'clients', label: 'My Clients' },
            { id: 'plans', label: 'Workout Plans' },
            { id: 'schedule', label: 'Schedule' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {activeTab === 'clients' && (
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Your Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Alex Kumar', goal: 'Weight Loss', progress: 45, lastSession: '2 days ago' },
                  { name: 'Priya Singh', goal: 'Muscle Gain', progress: 62, lastSession: 'Today' },
                  { name: 'Rohan Patel', goal: 'Strength', progress: 38, lastSession: '1 week ago' },
                  { name: 'Sarah Wilson', goal: 'Endurance', progress: 71, lastSession: '3 days ago' },
                  { name: 'Mike Brown', goal: 'Toning', progress: 55, lastSession: 'Today' },
                  { name: 'Emma Davis', goal: 'Flexibility', progress: 42, lastSession: '5 days ago' },
                ].map((client, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ translateY: -5 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{client.name}</h3>
                        <p className="text-sm text-gray-600">{client.goal}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-bold text-orange-600">{client.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${client.progress}%` }}
                          transition={{ duration: 1.5, delay: idx * 0.1 }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Last session: {client.lastSession}</p>
                    <button className="w-full px-3 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition text-sm">
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'plans' && (
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Workout Plans</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold"
                >
                  Create Plan
                </motion.button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Push Day', clients: 5, exercises: 8, difficulty: 'Intermediate' },
                  { name: 'Pull Day', clients: 4, exercises: 7, difficulty: 'Advanced' },
                  { name: 'Leg Day', clients: 6, exercises: 9, difficulty: 'Hard' },
                  { name: 'Cardio & Core', clients: 3, exercises: 6, difficulty: 'Beginner' },
                ].map((plan, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{plan.name}</h3>
                        <div className="flex gap-6 mt-2 text-sm text-gray-600">
                          <span>{plan.exercises} exercises</span>
                          <span>{plan.clients} clients</span>
                          <span className={`font-semibold ${
                            plan.difficulty === 'Beginner' ? 'text-green-600' :
                            plan.difficulty === 'Intermediate' ? 'text-yellow-600' :
                            plan.difficulty === 'Advanced' ? 'text-orange-600' :
                            'text-red-600'
                          }`}>
                            {plan.difficulty}
                          </span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700 transition">
                        Edit
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">My Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                  <div key={idx} className="text-center">
                    <p className="font-bold text-gray-700 mb-3">{day}</p>
                    <div className="space-y-2">
                      {[...Array(Math.floor(Math.random() * 4) + 1)].map((_, i) => (
                        <div key={i} className="bg-orange-100 text-orange-700 text-xs font-semibold p-2 rounded-lg">
                          {`Slot ${i + 1}`}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TrainerDashboard;
