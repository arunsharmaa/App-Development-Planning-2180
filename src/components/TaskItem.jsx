import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiTrash2, FiEdit3, FiSave, FiX } = FiIcons;

const TaskItem = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdate({ text: editText.trim() });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      className={`p-4 rounded-xl border transition-all duration-300 ${
        task.completed
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-200 hover:border-primary-300'
      }`}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start gap-3">
        <motion.button
          onClick={onToggle}
          className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-primary-500'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {task.completed && <SafeIcon icon={FiCheck} className="text-sm" />}
        </motion.button>

        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-3">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows="2"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1 text-sm"
                >
                  <SafeIcon icon={FiSave} />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-1 text-sm"
                >
                  <SafeIcon icon={FiX} />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className={`text-gray-800 ${task.completed ? 'line-through opacity-60' : ''}`}>
                {task.text}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>

        {!isEditing && (
          <div className="flex gap-2">
            <motion.button
              onClick={() => setIsEditing(true)}
              className="text-gray-400 hover:text-primary-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiEdit3} className="text-lg" />
            </motion.button>
            <motion.button
              onClick={onDelete}
              className="text-gray-400 hover:text-red-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiTrash2} className="text-lg" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TaskItem;