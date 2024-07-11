"use client"

import { Image } from '@nextui-org/react';
import React, { useState } from 'react';










export default function Carousel(){
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        "/images/crousel/1.webp",
        "/images/crousel/2.webp",
        "/images/crousel/3.webp",
    ];
    const diamond = [
        "/images/diamond.webp",


    ]

    const handleButtonClick = (index: any) => {
        setActiveIndex(index);
    };
        return(
            <>
            
            <div className=" max-w-5xl mx-auto bg-[url(/images/crousel/crouselbg.png)] py-[30px] rounded-[20px] shadow-2xl  bg-cover">
                        {/* <Image src='' className=' absolute top-0 z-10   w-full'   alt='img' height={1000} width={1000}></Image> */}
                        <div className="overflow-hidden relative  h-[30rem]">

                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute z-10 inset-0 transition-transform flex justify-center items-center duration-500 ease-in-out ${index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                                        }`}
                                    style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
                                >
                                    <div className="px-8  h-full w-full flex items-center justify-center">

                                        <Image src={slide} isZoomed alt='img' className=' !rounded-[30px] h-full w-full' height={1000} width={1000}></Image>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center relative z-10 mt-4 space-x-2">
                            <div className="flex justify-center items-center relative gap-5 z-10 mt-4 space-x-2">
                                <button
                                    className={`px-4 py-2 uppercase hover:text-[#74a81a] rounded-lg ${activeIndex === 0 ? 'text-5xl font-black text-[#74a81a]' : ' text-5xl font-black text-textbrown '}`}
                                    onClick={() => handleButtonClick(0)}
                                >
                                    Play
                                </button>
                                <Image src="/images/diamond.webp" alt="Diamond" className="w-6 h-10" width={200} height={200} />
                                <button
                                    className={`px-4 py-2 uppercase  hover:text-[#74a81a] rounded-lg ${activeIndex === 1 ? 'text-5xl font-black text-[#74a81a]' : ' text-5xl font-black text-textbrown '}`}
                                    onClick={() => handleButtonClick(1)}
                                >
                                    Collect
                                </button>
                                <Image src="/images/diamond.webp" alt="Diamond" className="w-6 h-10" width={200} height={200} />
                                <button
                                    className={`px-4 py-2 uppercase hover:text-[#74a81a] rounded-lg ${activeIndex === 2 ? 'text-5xl font-black text-[#74a81a]' : ' text-5xl font-black text-textbrown '}`}
                                    onClick={() => handleButtonClick(2)}
                                >
                                    Own
                                </button>



                            </div>
                                      
                        </div>
                        
                         {/* carousel end  */}
                         <p className=" max-w-3xl text-center mx-auto font-inter text-textbrown">Lorem ipsum Vivamus eu quam e dolor sit amet, consectetur adipiscing elit. Sed consequat Aliquam turpis ac nisi tincidunt, nec mollis justo semper. erat volutpat. u mauris volutpat posuere.</p>

                      <div className=" flex justify-center items-end gap-20 py-5">
                         {/* 1st  */}
                         <div >
                              <div><Image src="/images/crousel/egg.webp" alt="img" className="h-[120] w-[80px] hover:translate-y-[-20px]" height={200} width={200}></Image></div>
                              <div>
                                <h2 className=" text-xl font-bold text-textbrown">10,000,000</h2>
                                <p className=" text-base font-normal text-textbrown">Lorem Ipsum</p>
                              </div>
                         </div>
                          {/* 2st  */}
                          <div >
                              <div><Image src="/images/crousel/short.webp" alt="img" className="h-[80] w-[120px]  hover:translate-y-[-20px]" height={200} width={200}></Image></div>
                              <div>
                                <h2 className=" text-xl font-bold text-textbrown">10,000,000</h2>
                                <p className=" text-base font-normal text-textbrown">Lorem Ipsum</p>
                              </div>
                         </div>
                          {/* 3st  */}
                          <div >
                              <div><Image src="/images/crousel/coin.webp" alt="img" className="h-[120] w-[100px]  hover:translate-y-[-20px]" height={200} width={200}></Image></div>
                              <div>
                                <h2 className=" text-xl font-bold text-textbrown text-center">$5B</h2>
                                <p className=" text-base font-normal text-textbrown">Lorem Ipsum</p>
                              </div>
                         </div>

                      </div>





                    </div>
                         {/* carousel end  */}
            </>
        )
}