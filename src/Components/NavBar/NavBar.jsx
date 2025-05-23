import React, { useContext, useState } from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import ModeContext from '../../context/ModeContext'

function NavBar() {
    
    const {mode,setMode}=useContext(ModeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const darkModeHandler =()=>{
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
        
    };
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/"
                        className="flex   items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="navBarLogoImage">
                            <img src="https://res.cloudinary.com/dmp3kzyrb/image/upload/v1746607575/WhatsApp_Image_2025-05-07_at_14.14.53_mtgdzd.jpg" className="logoImage" alt="Logo" />
                        </div>
                    </NavLink>
                    <div className="flex gap-1 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        
                        {/* Mode Button */}
                        <button
                            className="p-2 w-10 border border-gray-700   bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
                            onClick={darkModeHandler}
                        >
                            {mode === 'light' ? <i class="fa-solid fa-moon"></i>: <i class="fa-solid fa-sun"></i>}
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900'} block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900'} block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                                    }
                                >
                                    Products
                                </NavLink>
                            <li>
                                <NavLink
                                    to="/achievements"
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900'} block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                                    }
                                >
                                    Achievements
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900'} block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                                    }
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `${isActive ? 'text-blue-700 dark:text-blue-700' : 'text-gray-900'} block py-2 px-3  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                                    }
                                >
                                    Contact Me
                                </NavLink>
                            </li>
                            <li>
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
