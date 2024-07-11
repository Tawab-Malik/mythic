"use client"
import { Button, } from "@nextui-org/react"
import Image from "next/image";
import Carousel from "./Birdcrousel";




export default function Market() {
   

    return (
        <>
            <section className=" bg-[#9d4c2f] py-[100px] ">
                <div className=" max-w-7xl mx-[20px] xl:mx-auto space-y-8">
                    <h2 className=" text-[28px] md:text-5xl font-black text-lightbrown text-center">MARKETPLACE</h2>
                    <p className=" text-lg font-normal text-[#e5d1cd] text-center max-w-5xl mx-auto">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare quis consequat eros ante congue magna at, curabitur tellus primis neque tortor accumsan bibendum vel dui tempor leo est ligula.

                    </p>


                    {/* birds on stone */}
                    <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 place-items-center space-y-10 md:space-y-0">
                        {/* 1st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/1.webp" className=" group-hover:scale-110 duration-500 relative z-[1] h-[300px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" pt-5 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 2st */}
                        <div className=" relative h-[350px] group flex flex-col items-center ">
                            <Image src="/images/birds/2.webp" className=" mt-10 md:mt-[90px] group-hover:scale-110 duration-500  relative z-10 h-[300px] md:h-[500px] xl:h-auto w-[250px] md:w-auto self-end " alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" mt-4   ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>

                        {/* 3st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/3.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[290px] w-[175px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" pt-5 mt-3 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 4st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/4.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[300px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" pt-5 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 5st */}
                        <div className=" relative h-[350px] group flex flex-col items-center  ">
                            <Image src="/images/birds/5.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[275px] mt-12 w-[250px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" pt-5 mt-2 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>



                    </div>


                    {/* eggs */}
                    <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 place-items-center space-y-10 md:space-y-0">
                        {/* 1st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/6.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[325px]  w-[220px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 2st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/7.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[290px] mt-4 w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" mt-5 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 3st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/8.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[315px] mt-4 w-[205px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className="  ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 4st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/9.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[325px] mt-2 w-[220px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>
                        {/* 5st */}
                        <div className=" relative h-[350px] group ">
                            <Image src="/images/birds/10.webp" className="group-hover:scale-110 duration-500 relative z-[1] h-[300px] mt-4 w-[210px]" alt="img" height={1000} width={1000}></Image>
                            <Image src="/images/birds/stone.webp" className=" absolute bottom-0 h-[100px] w-[200px]" alt="img" height={1000} width={1000}></Image>
                            <div className=" mt-3 ">
                                <Button className="  bg-[#774738] w-[190px] h-[50px] border border-[#AD6741] rounded-full opacity-80"><span className="group-hover:hidden flex items-center gap-3 justify-center text-base font-normal font-inter text-[#e5d1cd]"><p>#1234567</p> <h2 className=" font-bold text-lg font-inter">$2.43</h2></span><span className="hidden group-hover:inline text-[#e5d1cd] text-base">Comming Soon</span></Button>
                            </div>

                        </div>

                    </div>



                    {/* crousel */}
                    <div className=" py-[100px]">
                    <Carousel/>
                    </div>

                    <div className=" ">
                        <h2 className=" text-lg font-semibold text-white text-center">AS FEATURED IN:</h2>
                        <div className=" flex justify-between items-center max-w-5xl mx-auto py-5">
                        <Image src="/images/logo/1.webp" className=" h-[30px] w-[150px]" height={200} width={200} alt="img"></Image>
                        <Image src="/images/logo/2.webp" className=" h-[30px] w-[150px]" height={200} width={200} alt="img"></Image>
                        <Image src="/images/logo/3.webp" className=" h-[40px] w-[150px]" height={200} width={200} alt="img"></Image>
                        <Image src="/images/logo/4.webp" className=" h-[50px] w-[150px]" height={200} width={200} alt="img"></Image>
                        <Image src="/images/logo/5.webp" className=" h-[80px] w-[150px]" height={200} width={300} alt="img"></Image>
                    </div>
                    </div>
                    



                    


                </div>
            </section>
        </>
    )
}