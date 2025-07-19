import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiCheck, FiClock, FiTrendingUp } = FiIcons;

const Stats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: FiTarget,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      label: 'Completed',
      value: completedTasks,
      icon: FiCheck,
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      label: 'Active',
      value: activeTasks,
      icon: FiClock,
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      label: 'Completion Rate',
      value: `${completionRate}%`,
      icon: FiTrendingUp,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${stat.bg} rounded-2xl p-4 text-center`}
        >
          <div className={`${stat.color} text-2xl mb-2 flex justify-center`}>
            <SafeIcon icon={stat.icon} />
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;