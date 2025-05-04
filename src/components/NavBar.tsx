import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

interface NavbarProps {
    scrollToAbout: () => void;
    scrollToWork: () => void;
    scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToAbout, scrollToWork, scrollToContact}) => {
    const location = useLocation();
    const navigate = useNavigate();

    // const handleScroll = (targetY: number) => {
    //     animate(window.scrollY, targetY, {
    //         duration: 0.8,
    //         ease: [0.25, 0.1, 0.25, 1],
    //         onUpdate: (value) => window.scrollTo(0, value),
    //     });
    // };

    const handleNavigation = (section: string, scrollFunction: () => void) => {
        if (location.pathname.startsWith("/projects")) {
            navigate("/", { state: { scrollTo: section } });
        } else {
            scrollFunction();
        }
    };
    
    const isProjectPage = location.pathname.startsWith("/projects");

    return (
        <motion.nav
        className="fixed top-0 left-0 w-full z-50 font-dmsans uppercase"
        initial={isProjectPage ? {} : { transform: "translateY(-100%)" }}
        animate={isProjectPage ? {} : { transform: "translateY(0%)" }}
        transition={isProjectPage ? {} : { duration: 0.8, ease: "easeOut" }}
        >
            <div className="w-full z-10 top-0 bg-medium-beige">
                <div className="container mx-auto flex justify-between items-center px-20 pt-4 pb-4">

                    {/* Landing Page */}
                    <Link to="/" className="no-underline"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}>
                    <img
                    src="/CJ.png"
                    alt="Claudia Jaeger"
                    className="w-14 h-14 hidden sm:block"
                    />

                    {/* Navigation Links */}
                    </Link>
                    <ul className="flex space-x-4 text-medium-black text-lg font-light">

                        {[
                            { label: "About", action: scrollToAbout },
                            { label: "Work", action: scrollToWork },
                            { label: "Contact", action: scrollToContact },
                        ].map((item, index) => (
                            <motion.div
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
                            >
                                <motion.li
                                    key={index}
                                >
                                    <Link to="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(item.label.toLowerCase(), item.action);
                                    }}
                                    // className="hover:text-gray-800"
                                    >
                                    {item.label}
                                    </Link>
                                </motion.li>
                            </motion.div>
                        ))}

                        {/* <motion.div
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
                        >
                        <li>
                            <Link to="/about" className="hover:text-gray-700" onClick={(e) => {
                                e.preventDefault();
                                scrollToAbout();
                            }}>About</Link>
                        </li>
                        </motion.div>
                        
                        <motion.div
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
                        >
                            <li>
                            <Link to="/work" 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToWork();
                            }}                            
                            >Work</Link>
                            </li>
                        </motion.div>
                        
                        <motion.div
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
                        >
                            <li>
                            <Link to="/contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToContact();
                            }}                            
                            >Contact</Link>
                            </li>
                        </motion.div> */}
                        
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar;