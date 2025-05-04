import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, 
};

const WasteApp = () => {
  return (
    <motion.div 
    className='min-h-screen flex items-center relative px-96 pt-20'
    initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      variants={fadeInVariants}
    >
       <h2 className="text-4xl font-dmsans">Hello</h2>
    </motion.div>
  );
};

export default WasteApp;
