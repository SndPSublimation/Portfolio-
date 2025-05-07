import React from 'react';
import './home.css'
import {Link} from 'react-router-dom';
function Home() {
    function clickHandler(){
        const fileUrl="https://drive.google.com/uc?export=downlord&id=1c2udVHOS_40F-QMGMGwlPsYMJxQ1AYt1";
        const fileName="Brochure.pdf";
        const link=document.createElement('a');
        link.href=fileUrl;
        link.download=fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center h-screen bg-white dark:bg-gray-900 px-6 md:px-20">
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <div className="w-60 h-60 md:w-80 md:h-80 imageDiv">
                        <img
                            src="../public/profile/profileImage.jpg"
                            alt="Profile"
                            className="rounded-full object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">Hello, I'm</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">Pardeep Dahiya</h1>
                    <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mt-4">Custom Merchandise Seller</p>
                    <div className="flex justify-center md:justify-start mt-6 space-x-4">
                        <button className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                            onClick={clickHandler}
                        >
                            Download Brochure
                        </button>
                        <Link to='/contact' className="px-8 py-3 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            Contact Info
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
