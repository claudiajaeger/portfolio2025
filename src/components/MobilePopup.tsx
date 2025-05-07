import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobilePopup = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-light-beige flex items-center justify-center px-6"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md text-center text-medium-black bg-white shadow-lg p-6 rounded-xl border border-gray-200"
          >
            <h2 className="text-2xl font-trafit mb-2">Hi there! 👋</h2>
            <p className="text-sm font-dmsans text-medium-black">
              I see you're on mobile. Unfortunately, my portfolio is currently best viewed on a laptop or desktop screen.
              Please revisit from a larger screen. Thank you for your patience! 🫶
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobilePopup;
