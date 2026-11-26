import React, { useState } from "react";
import { motion } from "framer-motion";

const PopupNotification: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    return isVisible ? (
        <motion.div
            className="fixed bottom-6 z-20 right-6 bg-white text-gray-800 p-4 rounded-lg shadow-md w-80 flex items-start space-x-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
        >
            {/* Message Text */}
            <p className="text-sm font-normal italic font-dmsans">
                Hi there! This site is under construction and is best viewed on a desktop screen.  
                Responsiveness coming soon. Thank you for your patience. 🌷
            </p>

            {/* Close Button */}
            <button
                onClick={() => setIsVisible(false)}
                className="text-medium-black hover:text-gray-600 transition"
            >
                ✖
            </button>
        </motion.div>
    ) : null;
};

export default PopupNotification;
