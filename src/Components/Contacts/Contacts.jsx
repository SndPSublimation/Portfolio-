import React from 'react';

function Contacts() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 px-6 md:px-20">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                    I'm always excited to connect with others who share a passion for creating unique and meaningful gifts.
                    Whether it's a personalized keychain, custom mug, or a special scrapbook, every piece is crafted with care and love. 
                    <br /><br />
                    Get in touch with me today to bring your ideas to life and create something special. Let's collaborate to make your gift-giving moments even more memorable!
                </p>
                <h3 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">Contact us here :- </h3>
                <div className="flex flex-row justify-center  gap-5">
                    <div>
                    <a 
                        href="https://wa.me/919899880203" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-3xl text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                        >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    </div>
                    <div>
                    <a 
                      href="mailto:sndpsublimation@gmail.com" 
                      rel="noopener noreferrer" 
                      target="_blank" 
                      className="text-3xl text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>

                    </div>
                    <div>
                        <a href="https://www.instagram.com/sp_sublimation" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
