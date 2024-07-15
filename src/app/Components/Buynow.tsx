"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";


import { motion, Variants } from "framer-motion";
import React from 'react';
const cardVariants: Variants = {
    
    offscreen: {
        y: 100,
        opacity: 0, 
    },
    onscreen: {
        y: 50,
        opacity: 1,
        
        transition: {
            type: "spring",
            // bounce: 0.8,
            duration: 2.5,
            
        },
        
    },
};

export default function Buynow() {
    // const controls = useAnimation();
    // const { ref, inView } = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         controls.start('visible');
    //     } else {
    //         controls.start('hidden');
    //     }
    // }, [controls, inView]);
    return (
        <>
            <section className="relative">
                <div className="bg-[url(/images/greenbg.png)] bg-no-repeat bg-cover  xl:px-0">
                   
                    <div>
                        <Image
                            src="/images/cloud1.webp"
                            alt="img"
                            className=" h-[50px] md:h-[100px] xl:h-[400px] absolute top-[-100px] xl:top-[-220px] left-0 w-auto md:w-[300px] xl:w-[775px]"
                            width={2000}
                            height={2000}
                        />
                        <Image
                            src="/images/cloud2.webp"
                            alt="img"
                            className=" h-[50px] md:h-[100px] xl:h-[400px] absolute top-[-100px] xl:top-[-220px] right-0 w-auto md:w-[400px] xl:w-[775px]"
                            width={2000}
                            height={2000}
                        />
                    </div>
                    <div className=" pt-[50px] xl:pt-[150px] flex justify-center py-10">
                        <Button className="bg-[url(/images/buttonBg.png)] bg-cover bg-center w-[203px] h-[55px] text-2xl font-black text-lightbrown">
                            BUY NOW
                        </Button>
                    </div>

                    {/* scroll Backgrounded */}
                    <div className="max-w-7xl mx-[20px]  xl:mx-auto bg-[url(/images/scrollBg.png)] object-cover  md:mx-[50px] bg-center bg-cover py-5 px-[20px] md:px-[50px] xl:px-0">
                        <div className="py-[150px] max-w-2xl mx-auto font-inter">
                            {/* timer component */}
                            <div className=" flex justify-center gap-2 md:gap-10 pt-5">
                                {/* 1st */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className=" h-[40px] md:h-[70px] w-[40px] md:w-[70px] bg-[#74A81A] rounded-lg">
                                        <h1 className="text-center font-inter font-bold text-[24px] md:text-[42px] text-[#e5d1cd]">
                                            00
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-[16px] text-center font-normal text-[#62433c]">
                                            Days
                                        </p>
                                    </div>
                                </div>
                                {/* 2nd */}
                                <div className="flex flex-col gap-3 items-center">
                                <div className=" h-[40px] md:h-[70px] w-[40px] md:w-[70px] bg-[#74A81A] rounded-lg">
                                        <h1 className="text-center font-inter font-bold text-[24px] md:text-[42px] text-[#e5d1cd]">
                                            00
                                        </h1>
                                    </div>
                                    <div>
                                        <p className=" text-sm md:text-[16px] text-center font-normal text-[#62433c]">
                                            Hours
                                        </p>
                                    </div>
                                </div>
                                {/* 3rd */}
                                <div className="flex flex-col gap-3 items-center">
                                <div className=" h-[40px] md:h-[70px] w-[40px] md:w-[70px] bg-[#74A81A] rounded-lg">
                                        <h1 className="text-center font-inter font-bold text-[24px] md:text-[42px] text-[#e5d1cd]">
                                            00
                                        </h1>
                                    </div>
                                    <div>
                                        <p className=" text-sm md:text-[16px] text-center font-normal text-[#62433c]">
                                            Minutes
                                        </p>
                                    </div>
                                </div>
                                {/* 4th */}
                                <div className="flex flex-col gap-3">
                                <div className=" h-[40px] md:h-[70px] w-[40px] md:w-[70px] bg-[#74A81A] rounded-lg">
                                        <h1 className="text-center font-inter font-bold text-[24px] md:text-[42px] text-[#e5d1cd]">
                                            00
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-[16px] text-center font-normal text-[#62433c]">
                                            Seconds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* progress bar */}
                            <div className=" py-5 md:py-10">
                                <div className="w-full h-7 bg-[#E6D9D5] rounded-lg">
                                    <div className="text-base text-center font-normal text-[#62433c] font-inter">
                                        0% Sold
                                    </div>
                                </div>
                                <div className="text-base text-center font-normal text-[#62433c] font-inter flex justify-between items-center">
                                    <h1>1 $WING = 0.01 USDT</h1>
                                    <h1>Demo Stage 1</h1>
                                </div>
                            </div>
                            {/* input bar */}
                            <div>
                                <h1 className="text-xl text-center font-bold text-[#62433c] font-inter pb-4">
                                    Next Stage Price: 0.0125 USDT
                                </h1>
                                <div>
                                    <label
                                        htmlFor="Email"
                                        className="text-base font-normal text-[#62433c] font-inter"
                                    >
                                        Enter Email to Login and Buy
                                    </label>
                                    <div className="!relative">
                                        <Input
                                            type="email"
                                            className="font-normal bg-transparent font-inter"
                                            classNames={{
                                                input: "group-data-[has-value=true]:text-[#62433c] !text-base",
                                                innerWrapper: "",
                                                inputWrapper:
                                                    "data-[hover=true]:bg-transparent bg-transparent border-1 rounded-lg group-data-[focus=true]:bg-transparent border-[#62433c] h-12",
                                            }}
                                        />
                                        <Image
                                            src="/images/message.webp"
                                            className="top-2 right-2 absolute h-8 w-10"
                                            alt="img"
                                            width={100}
                                            height={100}
                                        />
                                    </div>

                                    <Button className="my-4 bg-[#62433C] text-lightbrown text-xl font-black w-full rounded-lg h-14">
                                        CONNECT WALLET
                                    </Button>
                                    <div className=" flex justify-center items-center gap-1 md:gap-6 py-2">
                                        <Image
                                            src="/images/token1.webp"
                                            className="md:h-12 md:w-12 h-8 w-8"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token2.webp"
                                            className="md:h-12 md:w-12 h-8 w-8"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token3.webp"
                                           className="md:h-12 md:w-12 h-8 w-8"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token4.webp"
                                            className="md:h-12 md:w-12 h-8 w-8"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token5.webp"
                                            className="md:h-12 md:w-12 h-8 w-8"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token6.webp"
                                            className="md:h-11 md:w-16 w-10"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                        <Image
                                            src="/images/token7.webp"
                                            className="md:h-11 md:w-16 w-12"
                                            alt="img"
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  carts */}
                    <div className=" grid-cols-1 grid  xl:grid-cols-3 max-w-7xl mx-[20px] md:mx-[50px] space-y-0 xl:mx-auto lg:space-y-20 xl:space-y-0">
                        {/* cart1 */}
                        <div>
                            <div className="bg-[url(/images/download.png)] relative py-14 h-[650px] bg-no-repeat bg-center bg-cover">
                                <h1 className="text-[30px] font-black text-textbrown pt-14 text-center">
                                    LOREM IPSUM
                                </h1>
                                <p className="text-base font-normal text-textbrown max-w-[300px] mx-auto text-center py-5">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit commodo,
                                    molestie conubia taciti blandit gravida ante rhoncus odio.
                                </p>
                            </div>
                            <motion.div
                                className="flex justify-center  "
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                                variants={cardVariants}
                            >
                                <Image
                                    src="/images/b1.webp"
                                    className="absolute bottom-0 md:bottom-[-50px] xl:bottom-10 left-[5%] md:left-[25%] xl:left-[15%]   md:w-[400px] xl:w-[320px]  md:h-[350px] xl:h-[320px]"
                                    alt="img"
                                    width={1000}
                                    height={1000}
                                />
                            </motion.div>
                        </div>
                        {/* cart2 */}
                        <div>
                            <div className="bg-[url(/images/download.png)] relative py-14 bg-no-repeat bg-center bg-cover h-[650px]">
                                <h1 className="text-[30px] font-black text-textbrown pt-14 text-center">
                                    LOREM IPSUM
                                </h1>
                                <p className="text-base font-normal text-textbrown max-w-[300px] text-center mx-auto py-5">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit commodo,
                                    molestie conubia taciti blandit gravida ante rhoncus odio.
                                </p>
                            </div>

                            <motion.div
                            // ref={ref}
                                className="flex justify-center  "
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                                variants={cardVariants}
                            >
                                <Image
                                    src="/images/b2.webp"
                                    className="absolute bottom-0 md:bottom-[-50px] xl:bottom-10 left-[5%] md:left-[20%] xl:left-[20%] md:w-[300px] xl:w-[200px] md:h-[350px] w-[250px] h-[300px] xl:h-[320px]"
                                    alt="img"
                                    width={1000}
                                    height={1000}
                                />
                            </motion.div>
                        </div>

                        {/* cart3 */}
                        <div>
                            <div className="bg-[url(/images/download.png)] relative py-14 bg-no-repeat bg-center bg-cover h-[650px]">
                                <h1 className="text-[30px] font-black text-textbrown pt-14 text-center">
                                    LOREM IPSUM
                                </h1>
                                <p className="text-base font-normal text-textbrown max-w-[300px] text-center mx-auto py-5">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit commodo,
                                    molestie conubia taciti blandit gravida ante rhoncus odio.
                                </p>
                            </div>

                            <motion.div
                                    //   ref={ref}
                                className="flex justify-center left-[15%]  "
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.8 }}
                                variants={cardVariants}
                            >
                                <Image
                                    src="/images/b3.webp"
                                    className="absolute bottom-0 md:bottom-[-50px] xl:bottom-10 left-[5%] md:left-[25%] xl:left-[15%] w-[400px] xl:w-[320px] h-[350px] xl:h-[320px]"
                                    alt="img"
                                    width={1000}
                                    height={1000}
                                />
                            </motion.div>
                        </div>

                    </div>
                {/* div for multicaerds */}
                <div className="  relative pt-14 xl:pt-0">

                    <Image src="/images/multi.webp" className=" max-w-7xl xl:max-w-[1600px] mx-auto w-full  md:h-[300px] xl:h-[550px]" alt="img" height={2000} width={3000}></Image>
                    <Image src="/images/grassend.webp" className=" w-full absolute bottom-0" alt="img" height={1000} width={2000}></Image>
                </div>
                </div>
            </section>
        </>
    );
}
