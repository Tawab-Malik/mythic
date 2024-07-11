"use client"

// Import Swiper React components
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from "@nextui-org/react"
import Image from "next/image"
import { Navigation } from 'swiper/modules';
import { motion, Variants } from 'framer-motion';
const cardVariants: Variants = {
    offscreen: {
        x: 300,

    },
    onscreen: {
        x: 0,

        transition: {
            type: "spring",

            duration: 0.5,

        },

    },
};
const cardVariants2: Variants = {
    offscreen: {
        x: -200,

    },
    onscreen: {
        x: 0,

        transition: {
            type: "spring",

            duration: 0.5,

        },

    },
};



export default function Lorem() {
    return (
        <>
            <section className=" bg-brown-image bg-cover pb-[150px]  ">

                {/*1 div  */}
                <div className=" max-w-7xl mx-[20px] xl:mx-auto xl:flex-row flex-col-reverse flex justify-between  gap-10 ">


                    {/* left */}
                    <div className=" w-full xl:w-[60%] flex justify-center">
                        <Image src="/images/tv.webp" className="md:w-[585px]  xl:w-[785px] md:h-[475px] xl:h-[575px]" height={1000} width={1000} alt="img"></Image>
                    </div>
                    {/* right */}
                    <div className=" w-full xl:w-[40%] space-y-2 md:space-y-5 xl:space-y-10 flex flex-col justify-center items-center xl:items-start ">
                        <Image src="/images/mythic3.webp" className=" w-[200px] md:w-[300px] h-[100px] md:h-[150px]" height={1000} width={1000} alt="img"></Image>
                        <h1 className=" text-[28px] md:text-5xl font-black text-lightbrown">LOREM IPSUM DOLOR</h1>
                        <p className=" text-base text-[#e5d1cd] font-normal text-center xl:text-start  md:w-[500px] xl:w-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit commodo, molestie conubia taciti blandit gravida ante rhoncus odio.</p>
                        <div className=" flex gap-5 md:flex-row flex-col space-y-2 items-center md:space-y-0">
                            <Button className=" bg-[url(/images/buttonBg.png)] bg-cover w-[170px] h-[50px] text-2xl font-black rounded-lg text-lightbrown hover:scale-110 " ><span>BUY NOW</span></Button>
                            <Button className="   w-[193px] h-[50px] text-2xl font-black text-textbrown hover:scale-110 rounded-lg" ><span>WHITEPAPER</span></Button>
                        </div>
                    </div>

                </div>

                {/* div 2 */}
                <div className=" flex justify-between xl:flex-row flex-col items-center max-w-7xl mx-[20px] xl:mx-auto  ">
                    {/* left card */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={cardVariants2}
                        className="   w-full bg-card-image bg-no-repeat !bg-center xl:bg-cover space-y-5 pl-[20px] md:pl-[70px] py-16 flex justify-center xl:justify-normal xl:items-start flex-col items-center  "  >
                        {/* <img src="" className=" absolute top-0" alt="" /> */}
                        <h2 className="max-w-[440px] text-start relative text-[28px] md:text-5xl font-black text-textbrown justify-start pt-[40px] md:pt-[70px]">WHAT'S MYTHIC WINGS?</h2>
                        <p className="max-w-[420px] text-start justify-start relative text-base text-textbrown font-normal">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare quis consequat eros ante congue magna at, curabitur tellus primis neque tortor accumsan bibendum vel dui tempor leo est ligula. Nunc himenaeos aptent pellentesque dis parturient ridiculus quisque quis, pulvinar per mi non dictumst risus morbi, lacus urna rhoncus hendrerit condimentum nostra luctus. Aptent neque nostra eros elementum pellentesque.</p>
                        <Button className="   w-[193px] h-[50px] text-2xl bg-transparent border-textbrown border font-black text-[#62433c] hover:scale-110 rounded-lg" >WHITEPAPER</Button>

                    </motion.div>
                    {/* right div */}
                    <motion.div

                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.4 }}
                        variants={cardVariants}
                        className=" w-full xl:w-[50%] xl:!m-10 space-y-5 ">
                        <Swiper

                            wrapperClass=''
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper !bg-center md:!bg-cover  bg-no-repeat !w-auto md:!w-[600px]  !bg-board-image "
                        >
                            <div className=' '>
                                <SwiperSlide className='!flex !items-center '><Image src="/images/silder/b1.webp" alt=' img' className=' h-[400px] w-[400px]' height={1000} width={1000}></Image></SwiperSlide>
                                <SwiperSlide className='!flex '><Image src="/images/silder/b2.webp" alt=' img' className=' h-[400px] w-[400px]' height={1000} width={1000}></Image></SwiperSlide>
                                <SwiperSlide className='!flex !items-center '><Image src="/images/silder/3.webp" alt=' img' className=' h-[400px] w-[400px]' height={1000} width={1000}></Image></SwiperSlide>
                                <SwiperSlide className='!flex '><Image src="/images/silder/4.webp" alt=' img' className=' h-[400px] w-[400px]' height={1000} width={1000}></Image></SwiperSlide>
                                <SwiperSlide className='!flex '><Image src="/images/silder/5.webp" alt=' img' className=' h-[400px] w-[400px]' height={1000} width={1000}></Image></SwiperSlide>

                            </div>


                        </Swiper>
                        <div className=' flex justify-center'>
                            <Button className=" bg-[url(/images/buttonBg.png)] bg-cover w-[170px] h-[50px] text-2xl font-black rounded-lg text-lightbrown hover:scale-110" >BUY NOW</Button>

                        </div>
                    </motion.div>



                </div>
            </section>
        </>
    )
}