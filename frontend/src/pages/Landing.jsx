import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap, BarChart3, Calendar, Target } from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your weight, strength, and fitness metrics with beautiful animated charts',
    },
    {
      icon: Calendar,
      title: 'Attendance',
      description: 'QR-based check-in system and calendar heatmap to visualize your gym consistency',
    },
    {
      icon: Target,
      title: 'Workout Logger',
      description: 'Log your exercises, sets, reps, and weights for every session',
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'Book slots with trainers and get personalized workout & diet plans',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Detailed insights into your fitness journey with interactive dashboards',
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Instant notifications for membership updates, class bookings, and achievements',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 top-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full border border-white border-opacity-20 mb-6">
              <span className="text-sm font-semibold">🚀 Welcome to FitTrack</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto"
          >
            The complete gym management and personal fitness tracking platform for members, trainers, and gym owners
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:shadow-2xl transition hover:scale-105"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white bg-opacity-10 backdrop-blur-lg text-white rounded-xl font-bold border border-white border-opacity-20 hover:bg-opacity-20 transition"
            >
              Sign In
            </Link>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 bg-gradient-to-b from-white from-opacity-5 to-transparent rounded-3xl border border-white border-opacity-10 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="flex items-center justify-center h-full">
              <div className="text-6xl">📊💪🏋️‍♂️</div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-black text-white text-center mb-16"
          >
            Powerful Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition group cursor-pointer"
                  whileHover={{ translateY: -10 }}
                >
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '10K+', label: 'Active Members' },
              { number: '500+', label: 'Gyms Worldwide' },
              { number: '1M+', label: 'Workouts Logged' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center"
              >
                <motion.div
                  className="text-5xl font-black text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text mb-2"
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-yellow-200 via-pink-300 to-red-400 rounded-3xl p-12 backdrop-blur-xl"
          >
            <h2 className="text-4xl font-black text-white mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:shadow-2xl transition hover:scale-105"
            >
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Landing;
