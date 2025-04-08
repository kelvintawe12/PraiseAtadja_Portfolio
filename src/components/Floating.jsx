import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Share2, Github, Linkedin } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  // Define button data with icons, labels, colors, and actions
  const buttons = [
    {
      icon: BookOpen,
      label: 'Resources',
      color: 'bg-blue-600',
      action: () => window.open('https://github.com/praise-orly/resources', '_blank'),
    },
    {
      icon: MessageCircle,
      label: 'Contact',
      color: 'bg-green-600',
      action: () => (window.location.href = 'mailto:praiseorly.a@gmail.com'),
    },
    {
      icon: Share2,
      label: 'Share',
      color: 'bg-purple-600',
      action: () =>
        navigator.share({
          url: window.location.href,
          title: 'Praise Orly Aku Atadja - Portfolio',
          text: 'Check out Praise Orly’s work in AI and healthcare innovation!',
        }).catch((err) => console.log('Share failed:', err)),
    },
    {
      icon: Github,
      label: 'GitHub',
      color: 'bg-gray-800',
      action: () => window.open('https://github.com/praise-orly', '_blank'),
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-800',
      action: () => window.open('https://linkedin.com/in/praise-orly', '_blank'),
    },
  ];

  return (
    <div className="floating-buttons">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${button.color} p-4 rounded-full shadow-md text-white flex items-center justify-center hover:shadow-lg transition-all duration-300`}
          onClick={button.action}
          title={button.label}
          aria-label={button.label}
        >
          <button.icon className="w-6 h-6" />
          <span className="sr-only">{button.label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default FloatingButtons;