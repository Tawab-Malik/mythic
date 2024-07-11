import Image from "next/image";



import { motion, Variants } from "framer-motion";
import React from 'react';
const cardVariants: Variants = {
    
    offscreen: {
        opacity: 0,
        
    },
    onscreen: {
        opacity: 1,
        
        transition: {
            // type: "ease-in",
            ease: "easeInOut",
            duration: 1.5,
            
        },
        
    },
};




export default function Tokenomics() {
    return (
        <>
            <section className=" bg-[#284224] relative">
                <Image src="/images/birds/rock.webp" className=" absolute top-[-120px] bg-cover bg-center h-[279px] w-full" alt="img" height={1000} width={1000} />

                <div className="  pt-48 max-w-7xl mx-[20px] xl:mx-auto" >
                    <h2 className=" text-5xl text-center text-lightbrown font-black">TOKENOMICS</h2>
                    <p className=" text-lightbrown max-w-4xl mx-auto text-center text-base font-inter">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare quis consequat eros ante congue magna at, curabitur tellus primis neque tortor accumsan bibendum vel dui tempor leo est ligula.

                    </p>
                    <div className=" flex justify-center ">
                        <Image src="/images/tokenomics-img.webp" className=" h-full  xl:h-[950px] w-full xl:w-[1000px]" alt="img" height={1000} width={1000} />

                    </div>


                    {/* ROADMAP */}
                    <h2 className=" text-5xl font-black text-lightbrown text-center">ROADMAP</h2>

                    {/* main group */}
                    <motion.div 
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true, amount: 0.8 }}
                     variants={cardVariants}
                    className=" bg-[url(/images/phase1.png)] bg-no-repeat flex justify-end items-center h-[740px] bg-center">
                        {/* <Image src="/images/phase1.png" className=" absolute top-0" alt="img" height={1000} width={1000}></Image> */}
                        <div className=" bg-[url(/images/paper.png)] bg-no-repeat  bg-cover w-[550px] h-[500px]  bg-center  ">
                            <div className=" ml-[115px] mt-[75px]">

                                <h2 className=" text-start text-lg text-[#cd7c47] font-black">Q1 2024</h2>
                                <h3 className=" text-2xl font-black text-textbrown">COMMUNITY/PRE-SALE
                                </h3>
                                <Image src="/images/barrow.webp" alt="img" className=" h-3 w-[300px]" height={100} width={400}></Image>

                                {/* list  */}

                                <div className=" space-y-5  pt-3 text-base">

                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lorem ipsum dolor sit amet</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Consectetur adipiscing</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Elit est, iaculis dictumst</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Hac cubilia metus primis</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lectus faucibus netus</h3></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                     {/* 2st group */}
                     <motion.div  initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true, amount: 0.8 }}
                     variants={cardVariants} className=" bg-[url(/images/phase2.png)] bg-no-repeat flex justify-start items-center h-[740px] bg-center mt-[-80px]">
                        {/* <Image src="/images/phase1.png" className=" absolute top-0" alt="img" height={1000} width={1000}></Image> */}
                        <div className=" bg-[url(/images/paper.png)] bg-no-repeat  bg-cover w-[550px] h-[500px]  bg-center  ">
                            <div className=" ml-[115px] mt-[75px]">

                                <h2 className=" text-start text-lg text-[#cd7c47] font-black">Q2 2024</h2>
                                <h3 className=" text-2xl font-black text-textbrown">PUBLIC SALE
                                </h3>
                                <Image src="/images/barrow.webp" alt="img" className=" h-3 w-[300px]" height={100} width={400}></Image>

                                {/* list  */}

                                <div className=" space-y-5  pt-3 text-base">

                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lorem ipsum dolor sit amet</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Consectetur adipiscing</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Elit est, iaculis dictumst</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Hac cubilia metus primis</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lectus faucibus netus</h3></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                     {/* 3st group */}
                     <motion.div  initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true, amount: 0.8 }}
                     variants={cardVariants} className=" bg-[url(/images/phase3.png)] bg-no-repeat flex justify-end items-center h-[740px] bg-center mt-[-80px]">
                        {/* <Image src="/images/phase1.png" className=" absolute top-0" alt="img" height={1000} width={1000}></Image> */}
                        <div className=" bg-[url(/images/paper.png)] bg-no-repeat  bg-cover w-[550px] h-[500px]  bg-center  ">
                            <div className=" ml-[115px] mt-[75px]">

                                <h2 className=" text-start text-lg text-[#cd7c47] font-black">Q3 2024</h2>
                                <h3 className=" text-2xl font-black text-textbrown">ALPHA PRESALE
                                </h3>
                                <Image src="/images/barrow.webp" alt="img" className=" h-3 w-[300px]" height={100} width={400}></Image>

                                {/* list  */}

                                <div className=" space-y-5  pt-3 text-base">

                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lorem ipsum dolor sit amet</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Consectetur adipiscing</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Elit est, iaculis dictumst</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Hac cubilia metus primis</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lectus faucibus netus</h3></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                     {/* 4st group */}
                     <motion.div  initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true, amount: 0.8 }}
                     variants={cardVariants} className=" bg-[url(/images/phase4-new.png)] bg-no-repeat flex justify-start items-center h-[740px] bg-center mt-[-80px]">
                        {/* <Image src="/images/phase1.png" className=" absolute top-0" alt="img" height={1000} width={1000}></Image> */}
                        <div className=" bg-[url(/images/paper.png)] bg-no-repeat  bg-cover w-[550px] h-[500px]  bg-center  ">
                            <div className=" ml-[115px] mt-[75px]">

                                <h2 className=" text-start text-lg text-[#cd7c47] font-black">Q4 2024</h2>
                                <h3 className=" text-2xl font-black text-textbrown">BETA LAUNCH
                                </h3>
                                <Image src="/images/barrow.webp" alt="img" className=" h-3 w-[300px]" height={100} width={400}></Image>

                                {/* list  */}

                                <div className=" space-y-5  pt-3 text-base">

                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lorem ipsum dolor sit amet</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Consectetur adipiscing</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Elit est, iaculis dictumst</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Hac cubilia metus primis</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lectus faucibus netus</h3></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>
                     {/* 5st group */}
                     <motion.div  initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true, amount: 0.8 }}
                     variants={cardVariants} className=" bg-[url(/images/phase5.png)] bg-no-repeat flex justify-end items-center h-[740px] bg-center mt-[-80px]">
                        {/* <Image src="/images/phase1.png" className=" absolute top-0" alt="img" height={1000} width={1000}></Image> */}
                        <div className=" bg-[url(/images/paper.png)] bg-no-repeat  bg-cover w-[550px] h-[500px]  bg-center  ">
                            <div className=" ml-[115px] mt-[75px]">

                                <h2 className=" text-start text-lg text-[#cd7c47] font-black">Q5 2024</h2>
                                <h3 className=" text-2xl font-black text-textbrown">WELCOME TO
                                METAVERSE
                                </h3>
                                <Image src="/images/barrow.webp" alt="img" className=" h-3 w-[300px]" height={100} width={400}></Image>

                                {/* list  */}

                                <div className=" space-y-5  pt-3 text-base">

                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lorem ipsum dolor sit amet</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Consectetur adipiscing</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Elit est, iaculis dictumst</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Hac cubilia metus primis</h3></div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div><Image src="/images/diamond.webp" alt="img" className=" h-7 w-5" height={100} width={400}></Image></div>
                                        <div className=""><h3 className=" font-inter text-textbrown">Lectus faucibus netus</h3></div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </motion.div>







                </div>
            </section>
        </>
    )
}