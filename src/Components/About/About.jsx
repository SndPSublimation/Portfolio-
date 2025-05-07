import React from "react";

function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen bg-gray-100  dark:bg-gray-900 px-6 md:px-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi! I’m Pardeep Dahiya, the heart and hands behind S&P Sublimation  –
            where gifts are more than just things, they’re emotions wrapped with
            love and creativity. What started as a simple love for crafting has
            now turned into a passion for creating customized, meaningful gifts
            that make people smile. From Cooperate , birthdays and anniversaries to special
            occasions and “just because” moments, every item I make is
            personalized to tell a story — your story.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Each piece is thoughtfully designed and handmade with care, using
            quality materials and a big dash of creativity. Whether it’s a
            name-engraved keychain, or a custom mug
            with a message that makes someone’s day – I believe every gift
            should feel one-of-a-kind. Thank you for stopping by my little
            corner of creativity. Let’s create something beautiful together!
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
