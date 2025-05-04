// Contact form and social media links
import {motion} from "framer-motion";

import React from "react";

const Contact = () => {
    return (
        <motion.div
                className="min-h-screen flex items-center justify-center bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >
                <h3>Contact</h3>
                </motion.div>
    )
}

export default Contact;