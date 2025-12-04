import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Users, DollarSign, TrendingUp, AlertCircle, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const revenueData = [
    { month: 'Jan', revenue: 15000, members: 120 },
    { month: 'Feb', revenue: 18000, members: 135 },
    { month: 'Mar', revenue: 21000, members: 155 },
    { month: 'Apr', revenue: 19500, members: 150 },
    { month: 'May', revenue: 24000, members: 175 },
    { month: 'Jun', revenue: 28000, members: 200 },
  ];

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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-2">Admin Dashboard</h1>
            <p className="text-lg text-gray-100">Manage your gym operations efficiently</p>
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
            { icon: Users, label: 'Total Members', value: '250', color: 'from-blue-500 to-blue-600' },
            { icon: DollarSign, label: 'Revenue (MTD)', value: '$28,000', color: 'from-green-500 to-green-600' },
            { icon: TrendingUp, label: 'Active Today', value: '142', color: 'from-purple-500 to-purple-600' },
            { icon: AlertCircle, label: 'Renewals Due', value: '18', color: 'from-red-500 to-red-600' },
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

        {/* Charts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#FFF' }} />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Member Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px', color: '#FFF' }} />
                <Bar dataKey="members" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Management Tables */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recent Members</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold"
              >
                Add Member
              </motion.button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Name</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Plan</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Expires</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'John Doe', email: 'john@example.com', plan: 'Premium', expires: '2024-06-15', status: 'Active' },
                    { name: 'Jane Smith', email: 'jane@example.com', plan: 'Standard', expires: '2024-05-20', status: 'Active' },
                    { name: 'Mike Johnson', email: 'mike@example.com', plan: 'Basic', expires: '2024-04-30', status: 'Expiring Soon' },
                  ].map((member, idx) => (
                    <motion.tr
                      key={idx}
                      variants={itemVariants}
                      className="border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="py-4 px-4">{member.name}</td>
                      <td className="py-4 px-4 text-gray-600">{member.email}</td>
                      <td className="py-4 px-4">{member.plan}</td>
                      <td className="py-4 px-4">{member.expires}</td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AdminDashboard;
