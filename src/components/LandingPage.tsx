import { useEffect, useState }from "react";
import React from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Popup from "./Popup";
import FAQAccordion from "./Accordion";
import Testimonials from "./Testimonials";
import MobilePopup from "./MobilePopup";


interface LandingPageProps {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    workRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

const LandingPage: React.FC<LandingPageProps> = ({aboutRef, workRef, contactRef}) => {
    const text = "Coming Soon";
    const {scrollYProgress} = useScroll();
    const y = useTransform(scrollYProgress, [0.2, 0.5], [0, 50]);

    const fadeInFromBottom = {
        hidden: {y: 50, opacity: 0},
        visible: {y: 0, opacity: 1, transition: {
            duration: 0.6, ease: "easeOut"
        }},
    };

    const hobbies = ["world traveler", "greenophile", "font enthusiast", "coffee addict", "pasta and soup nerd", "sun lover", "social butterfly", "bookworm", "jazz music fan"]
    const [hobbyIndex, setHobbyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHobbyIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
        }
        , 3000);
        return () => clearInterval(interval);
    }, []);

    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) {
          setShowContent(false);
        }
      }, []);

    return (
        <div>
        <MobilePopup/>
        {showContent && (
        <main>
        {/* Landing Page Section */}
        <motion.div
        id="landing"
        className="h-[120vh] bg-medium-beige flex items-center justify-center relative mt-28"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {duration: 0.5}},
            exit: {opacity: 0},
        }}
      >
        {/* Flower Decal */}
        <motion.img
        src="/Flower_left.svg"
        alt="Decorative flower"
        className="absolute top-48 left-0 h-auto w-[320px] z-10 pointer-events-none hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        />
        <div className="text-medium-black z-20 relative px-10 mb-20">
            <motion.div
                className="absolute text-medium-black text-5xl font-light cursor-default hidden sm:block"
                style={{ top: '-4rem', right: '8rem' }}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                ✷
            </motion.div>
            <motion.div
            className="absolute text-2xl font-light text-medium-black transform origin-center cursor-default hidden sm:block"
            style={{ top: '1.8rem', left: '4.5rem' }}
            initial={{ opacity: 0 }}
            animate={{ rotate: 360 * 3, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            >
                ✦
            </motion.div>
            <motion.h1 
            className="text-7xl text-medium-black text-right mb-6 font-trafit relative cursor-default sm:text-center sm:text-9xl"
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 1.8,
                ease: 'easeInOut'
            }}
            >
                Claudia Jaeger
            </motion.h1>
            <motion.h2
            className="text-4xl text-medium-black text-right mb-40 font-dmsans font-extralight relative uppercase cursor-default"
            initial={{x: -200, opacity: 0}}
            animate={{x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1}}
            >
                <div className="w-full flex justify-end">
                <div className="text-right">
                UX/UI Designer & Developer <br />
                and{" "}
                <span className="min-w-[16ch] text-right sm:text-left block sm:inline-block">
                <AnimatePresence mode="wait">
                    <motion.span
                    key={hobbies[hobbyIndex]}
                    className="inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    >
                    {hobbies[hobbyIndex]}
                    </motion.span>
                </AnimatePresence>
                </span>
                <div className="w-[420px] h-[2px] bg-medium-black mt-2 opacity-80 hidden sm:block ml-auto"></div>
                </div>
                </div>

            </motion.h2>
            
            <motion.h2
            className="text-4xl text-center font-dmsans font-light relative cursor-pointer"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{
                opacity: 0.8,
                transition: { duration: 0.3 },
            }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
                ⇓
            </motion.h2>
        </div>
      </motion.div>

    {/* About Section */}
    <div className="bg-medium-beige">
    <motion.section
        ref={aboutRef}
        id="about"
        className="relative h-[120vh] items-center px-10 lg:px-40 lg:mr-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1, transition: {
                duration: 0.6, ease: "easeOut"
            }},
        }}
      >
        <motion.div className="col-span-2 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={fadeInFromBottom}
        >
            <motion.h2 className="text-5xl font-eczar font-medium">About</motion.h2>
            <motion.div className="border-b border-medium-black opacity-20 w-full mb-6"></motion.div>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 items-start mt-32 gap-x-8 gap-y-0">

        {/* Left side About */}
        <motion.div
        className="relative flex items-center justify-center leading-none"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={fadeInFromBottom}
        >
            {/* Rotating circle of hellos */}
            <motion.svg
                viewBox="0 0 300 300"
                className="absolute top-[-100px] left-[-60px] w-[300px] h-[300px] font-light text-medium-black"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <defs>
                <path
                    id="circlePath"
                    d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                    fill="none"
                />
                </defs>
                <text fill="currentColor" fontSize="14" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="0%">
                    HALLO! HEJ! こんにちは! WELCOME TO MY PORTFOLIO! GRAB A CUPPA AND STAY A WHILE. ☺ 
                </textPath>
                </text>
            </motion.svg>
            
                {/* Profile Image */}
                <motion.img 
                    src="./Profile_Claudia.png"
                    alt="profile"
                    className="relative z-10 w-[410px] h-[500px] object-cover mr-16"
                />
        
        </motion.div>

        {/* Right side About */}
        <motion.div
        className="max-w-3xl text-left text-medium-black"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={fadeInFromBottom}
        >
            <p className="text-2xl font-normal font-dmsans leading-relaxed mb-2">
                Hi! I'm Claudia. 
            </p>
            <p className="text-base font-light font-dmsans leading-relaxed mb-2">
                I'm a UX/UI Designer and Developer from Stockholm 🇸🇪. I recently worked at <motion.a href="https://www.accenture.com/se-en/about/accenture-song-index"
                className="font-medium text-black"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ backgroundSize: "0% 1px" }}
                whileHover={{
                    backgroundSize: "100% 2px",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    display: "inline-block",
                    backgroundImage: "linear-gradient(90deg, black, black)",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "0% 2px",
                }}
                >Accenture Song</motion.a> where I wore many hats across a wide variety of projects. I approach UX and web design much like I do my love for travelling—with a set of constraints and planning, but always with curiosity and adaptability to create meaningful experiences for users and clients.
            </p>
            <p className="text-base font-light font-dmsans leading-relaxed mb-2">I graduated from Stockholm University with a B.S. in Computer Science, specializing in Human-Centered Design. I also hold a B.A. in Asian Languages and Cultures from Stockholm University and Waseda University in Tokyo.</p>
            <p className="text-base font-light font-dmsans leading-relaxed mb-6">
                After spending some time in Tokyo, I'm now open to new full-time opportunities in Europe. <motion.h3
                initial={{ backgroundSize: "0% 1px" }}
                whileHover={{
                    backgroundSize: "100% 2px",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                    display: "inline-block",
                    backgroundImage: "linear-gradient(90deg, black, black)",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "0% 2px",
                }}
                className="cursor-pointer font-medium text-black"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Get in touch!</motion.h3>
            </p>
        </motion.div>
        </motion.div>
      </motion.section>
      </div>

      {/* Skills and Tools Section */}
      <div className="bg-light-beige">
      <motion.section 
        className="relative h-[110vh] items-center px-10 lg:px-40 lg:mr-auto overflow-hidden pt-20"
        >
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                variants={fadeInFromBottom}
                className="mb-16"
                >
                    <motion.h2 
                    className="text-5xl font-eczar font-medium"
                    >
                    Skills & Tools
                    </motion.h2> 
                    <motion.div className="border-b border-medium-black opacity-20 w-full mb-6"></motion.div>
                    <motion.h3
                    className="text-gray-800 font-dmsans text-base font-light mb-8 mt-8"
                    >
                    The skills and tools I use to bring my clients' products and services to life.
                    </motion.h3>
                    {/* Resume Link */}
                    <motion.a
                        href="./Resume_ClaudiaJaeger.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dmsans cursor-pointer uppercase font-light text-medium-black border border-medium-black px-6 py-2 text-base no-underline"
                        whileHover={{
                            backgroundColor: "#0E0E0E",
                            color: "#ffffff",
                        }}
                    >
                            View Resume
                    </motion.a>
                </motion.div>
                         
                {/* Ping-Pong Slider */}
                {/* <div className="relative w-screen mt-16">
                    <motion.div
                    className="flex space-x-6 w-max overflow-hidden cursor-default"
                    
                    animate={{
                        x: ["0%", "-50%", "0%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 80,
                        ease: "linear",
                    }}
                >
                    {[
                    "Figma", "•", "Adobe Creative Cloud", "•", "Content Strategy", "•", "UX Design",
                    "•", "Miro", "•", "React.js", "•", "JavaScript", "•", "Vue.js",
                    "•", "TypeScript", "•", "Next.js", "•", "HTML", "•", "CSS", "•", "Bootstrap",  "•", "TailwindCSS",
                    "•", "Framer Motion", "•", "Storybook", "•", "Git", "•", "Design Thinking",
                    "•", "Azure DevOps", "•", "Python", "•", "Gherkin",
                    ].map((skill, index) => (
                        <span
                            key={index}
                            className="text-base uppercase font-light font-dmsans"
                        >
                            {skill}
                        </span>
                    ))}
                    </motion.div>
                </div> */}

                {/* Flower Decal */}
                <motion.img
                    src="/Flower_right.svg"
                    alt="Decorative flower"
                    className="absolute top-[245px] right-0 h-auto w-[340px] z-10 pointer-events-none hidden sm:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                />
                {/* FAQ's */}
                <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-2xl font-normal font-dmsans leading-relaxed mb-4 mt-14">
                Frequently Asked Questions
                </motion.p>
                <motion.div
                initial="hidden"
                whileInView="visible"
                className="mt-2"
                viewport={{ once: true }}
                variants={fadeInFromBottom}
                >
                    <FAQAccordion/>
                </motion.div>

        </motion.section>
    </div>

    {/* Work Section */}
    <div className="bg-light-beige">
    <motion.section
    ref={workRef}
    id="work"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    variants={fadeInFromBottom}
    className="relative h-[120vh] items-center px-10 lg:px-40 lg:mr-auto overflow-hidden pt-20"
    >
        {/* Section Title */}
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                variants={fadeInFromBottom}
                >
                <motion.h2 className="text-5xl font-eczar font-medium">
                Selected Works
                </motion.h2>
                <motion.div className="border-b border-medium-black opacity-20 w-full mt-2 mb-6"></motion.div>
                <motion.h3
                    className="text-gray-800 font-dmsans font-light mb-2"
                    >
                    Due to NDAs, sharing previous client work is limited, but here are some selected projects—some big, some small. 
                </motion.h3>
                <motion.h3
                    className="text-gray-800 font-dmsans font-normal mb-2"
                    >
                    Looking for a deeper dive? Happy to chat more about my work over a coffee or call! 
                </motion.h3>
        </motion.div>
        {/* Coming Soon Section */}
        <motion.div 
        className="flex items-center justify-center mt-60"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInFromBottom}
        >
        <motion.div
            className="flex"
            variants={containerVariants}
        >
            {text.split("").map((char, index) => (
            <motion.span
                key={index}
                className="text-5xl font-trafit sm:text-9xl md:text-9xl font-normal text-medium-black cursor-default"
                variants={letterVariants}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
            ))}
        </motion.div>
        </motion.div>

    </motion.section>
    </div>
    {/* Testimonials Section */}
    <div className="bg-light-beige">
      <motion.section 
        className="relative h-[80vh] items-center px-10 lg:px-40 lg:mr-auto overflow-hidden"
        >
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                variants={fadeInFromBottom}
                className="mb-16"
                >
                    <motion.h2 
                    className="text-5xl font-eczar font-medium"
                    >
                    Testimonials
                    </motion.h2> 
                    <motion.div className="border-b border-medium-black opacity-20 w-full mb-6"></motion.div>
                    <Testimonials />
                </motion.div>
        </motion.section>
    </div>    

      {/* Contact Section */}
      <div className="bg-medium-beige">
      <motion.section
        ref={contactRef}
        id="contact"
        className="relative h-[60vh] flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40"
      >
        {/* Left side text section */}
        <motion.div className="w-full lg:w-1/2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        variants={fadeInFromBottom}>

            <motion.h2 
            className="mb-6 text-5xl font-eczar font-medium"
            variants={fadeInFromBottom}
            >Get in Touch</motion.h2>
                <motion.h3
                className="text-gray-800 mb-2 text-base font-dmsans font-light"
                >
                    Let's create something amazing together or grab a coffee!
                </motion.h3>
                <motion.h3
                className="text-gray-800 mb-4 text-base font-dmsans font-light"
                >
                    Now open to new full-time opportunities. 
                </motion.h3>
                <motion.a href="mailto:claudia.jager@outlook.com"
                className="text-3xl text-medium-black font-light font-dmsans cursor-pointer mb-4"
                initial={{ backgroundSize: "0% 2px" }}
                whileHover={{
                    backgroundSize: "100% 5px",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    display: "inline-block",
                    backgroundImage: "linear-gradient(90deg, black, black)",
                    backgroundPosition: "0 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "0% 5px",
                  }}
                  variants={fadeInFromBottom}
                >
                    claudia.jager@outlook.com
                </motion.a>        
            {/* Social Links */}
            <motion.div className="flex space-x-4">
                <a href="https://github.com/claudiajaeger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium-black transition-colors duration-300 text-2xl">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/claudia-jager/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium-black transition-colors duration-300 text-2xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/claudiajaegr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-medium-black transition-colors duration-300 text-2xl">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </motion.div>
        </motion.div>
        {/* Right side illustration section */}
        {/* <motion.div
        className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <img
            src={"./CJ.png"}
            alt="Decorative floral illustration"
            className="max-h-[250px] w-auto object-contain"
        />
        </motion.div> */}
      </motion.section>
      {/* Popup Notification */}
      <Popup />
    
    </div>
    </main>
        )}
    </div>
    )
}

export default LandingPage;