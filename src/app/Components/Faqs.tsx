// components/Faq.js
"use clien"
import { useState } from 'react';


import { motion, Variants } from "framer-motion";
import React from 'react';

const Faqs2: Variants = {

    offscreen: {
        // opacity: 0,
        x: -150,

    },
    onscreen: {
        // opacity: 1,
        x: 0,

        transition: {
            // type: "ease-in",
            ease: "easeInOut",
            duration: 1.0,

        },

    },
};
const Faqs1: Variants = {

    offscreen: {
        x: 150,


    },
    onscreen: {
        x: 0,


        transition: {
            // type: "ease-in",
            ease: "easeInOut",
            duration: 1.0,

        },

    },
};

const FaqItem = ({ question, answer }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.8 }}
    variants={Faqs2}
     className="py-2">
      <button
        className="flex justify-between w-full p-5 text-left text-2xl rounded-lg font-black text-textbrown bg-faqs-image bg-cover bg-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="mt-2 bg-[#562719] text-base text-[#e6c484] p-5 rounded-lg border-[#e6c484] border">{answer}</p>
      </div>
    </motion.div>
  );
};
const FaqItem2 = ({ question2, answer2 }:any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      variants={Faqs1}
       className="py-2">
        <button
          className="flex justify-between w-full p-5 text-left text-2xl rounded-lg font-black text-textbrown bg-faqs-image bg-cover bg-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question2}
        </button>
        <div
          className={`transition-max-height duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <p className="mt-2 bg-[#562719] text-base text-[#e6c484] p-5 rounded-lg border-[#e6c484] border">{answer2}</p>
        </div>
      </motion.div>
    );
  };
  

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <FaqItem 
        question="Lorem ipsum dolor sit amet consectetur?" 
        answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt" 
      />
      <FaqItem2 
        question2="Diam risus nibh parturient?" 
        answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt" 
      />
      <FaqItem 
        question="Ridiculus ultrices fames torquent?" 
        answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt" 
      />
      <FaqItem2 
        question2="Orci eros egestas magna?" 
        answer2="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt" 
      />
      <FaqItem 
        question="Quis dignissim faucibus vestibulum?" 
        answer="Eros commodo bibendum tortor class nullam aliquet libero auctor volutpat platea aptent tellus sociosqu blandit odio, id donec augue eu massa laoreet viverra habitasse torquent mattis orci ridiculus cubilia. Vivamus sociosqu suscipit ad phasellus tincidunt" 
      />
    </div>
  );
};

export default Faq;
