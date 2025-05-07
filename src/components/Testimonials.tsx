import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const testimonials = [
    {
        quote: "I worked with Claudia during one of the most remarkable AI boom in our industry. Claudia's eye for design, full stack experience and collaborative nature was instrumental in helping the Gen AI Accelerator gain traction and become one of the early success stories at our company.",
        name: "Roberto Beltran",
        role: "AI Innovation Executive",
      },
  {
    quote: "Claudia really impressed us with her self drive, proactivity and high maturity in the UX/UI deliverables. She was able to contribute with high quality deliverables from day one. On top of this she has a great positive attitude and is a real team player!",
    name: "Margareth Knutsen",
    role: "Design Director",
  },

  {
    quote: "In the few months I've been able to work with Claudia I have been blown away by her talent and ability in front end and UX/UI Design.  She communicates clearly, and always maintains a positive attitude even when challenges arise. She's able to work effectively with our cross-functional teams and keep projects on track.",
    name: "James Casey",
    role: "Senior Software Engineer",
  },
  {
    quote: "I described what I was looking for in a single meeting, and by the end of the week the website she built was lauded by senior stakeholders at one of our largest client. We're all using some variation of the front-end Claudia designed that have led to over $1M in sales.",
    name: "Danny Richardson",
    role: "Data Science Consultant",
  },
  {
    quote: "Her positive attitude, enthusiasm, high level of attention to detail has significantly contributed to the overall quality of the project. Her communication skills are notable, and I'm also impressed with her urge to learn from more experienced team members and never hesitates to reach out to other team members/experts for guidance.",
    name: "Leela Katikireddy",
    role: "AI Solution Architect",
  },
];

const quoteVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

const Testimonials: React.FC = () => {
  const [[index, direction], setIndex] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prevIndex]) => [(prevIndex + 1) % testimonials.length, 1]);
    }, 9000); // ⬅️ 10 seconds instead of 6
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center text-center min-h-[400px] sm:min-h-[500px] mt-10 sm:mt-24 pt-2 sm:pt-4">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={testimonials[index].quote}
          custom={direction}
          variants={quoteVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) {
              setIndex([
                (index - 1 + testimonials.length) % testimonials.length,
                -1,
              ]);
            } else if (offset.x < -100) {
              setIndex([(index + 1) % testimonials.length, 1]);
            }
          }}
          className="absolute top-0 left-0 w-full p-8"
        >
          <p className="text-2xl font-dmsans font-light italic text-medium-black opacity-70 mb-6">
            “{testimonials[index].quote}”
          </p>
          <div className="text-lg font-semibold font-eczar text-medium-green">
            {testimonials[index].name}
          </div>
          <div className="text-sm text-medium-black font-dmsans opacity-70">
            {testimonials[index].role}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
