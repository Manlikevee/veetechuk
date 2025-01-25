'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextTransitionExample = () => {
    const TEXTS = ['Innovation', 'Growth', 'Efficiency', 'Success', 'Optimization', 'Scalability', 'Agility',];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Change text every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      key={currentTextIndex} // Key ensures smooth transition when text changes
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {TEXTS[currentTextIndex]}
    </motion.div>
  );
};

export default TextTransitionExample;
