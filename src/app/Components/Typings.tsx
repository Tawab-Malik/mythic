import Image from "next/image"
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { inView, useAnimation } from "framer-motion"


export default function Typings(){
    // const controls = useAnimation();
    // const { ref, inView } = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         controls.start('visible');
    //     } else {
    //         controls.start('hidden');
    //     }
    // }, [controls, inView]);
   
            return(
                <>
                <section className=" bg-mount-image bg-no-repeat bg-cover bg-center relative  bg-fixed xl:h-[700px]">
                <Image src="/images/blur-gradient.webp" className=' h-[50px] absolute top-0 w-full' alt='img' height={1000} width={1000}></Image>
                <div className=" py-[50px]">
                        <Image
                            src="/images/cloud1.webp"
                            alt="img"
                            className="h-[150px] xl:h-[300px] absolute top-[-100px] xl:top-[-220px] left-0 w-auto md:w-[400px] xl:w-[750px]"
                            width={2000}
                            height={2000}
                        />
                        <Image
                            src="/images/cloud2.webp"
                            alt="img"
                            className=" h-[150px] xl:h-[300px] absolute top-[-100px] xl:top-[-220px] right-0 w-[400px] xl:w-[750px]"
                            width={2000}
                            height={2000}
                        />
                    </div>
                    <div className=" max-w-7xl mx-[20px] xl:mx-auto"> 
                    
                        <h1 className=" text-5xl font-black text-white text-center pb-10">TYPINGS & ATTRIBUTES</h1>
                        <div className=" space-y-10">
                            <div className=" flex gap-5 justify-center items-center">
                                <Image src="/images/type/left-divider.webp" alt="img"  className="h-[5px] md:h-[15px] w-auto md:w-[300px]"  height="1000" width="1000"></Image>
                                <p className=" text-lg font-semibold text-white">ELEMENTS</p>
                                <Image src="/images/type/right-divider.webp" alt="img" className=" h-[5px] md:h-[15px] w-auto md:w-[300px]" height="1000" width="1000"></Image>
                            </div>
                            <div className=" grid grid-cols-2 place-items-center xl:flex justify-center gap-[50px] xl:gap-[100px]">
                                <Image src="/images/type/forest.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 "  height={1000} width={1000}></Image>
                                <Image src="/images/type/water.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>
                                <Image src="/images/type/star.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>
                                <Image src="/images/type/world.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>
                                <Image src="/images/type/fire.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>

                            </div>
                            <div className=" flex gap-5 justify-center items-center">
                                <Image src="/images/type/left-divider.webp" alt="img"  className=" h-[5px] md:h-[15px] w-[100px] md:w-[300px]"  height="1000" width="1000"></Image>
                                <p className=" text-lg font-semibold text-white">ATTRIBUTES</p>
                                <Image src="/images/type/right-divider.webp" alt="img" className=" h-[5px] md:h-[15px] w-[100px] md:w-[300px]" height="1000" width="1000"></Image>
                            </div>
                            <div className=" grid grid-cols-2 place-items-center xl:flex justify-center gap-[50px] xl:gap-[80px]">
                                <Image src="/images/type/greed.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 "  height={1000} width={1000}></Image>
                                <Image src="/images/type/lightning.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>
                                <Image src="/images/type/goodluck.webp" alt="img" className="h-[90px] w-[90px] hover:scale-110 duration-300 " height={1000} width={1000}></Image>
                                

                            </div>
                        </div>

                    </div>
                    <Image src="/images/grassend.webp" className=" w-full absolute bottom-0 h-[150px]" alt="img" height={1000} width={2000}></Image>

                </section>
                </>
            )
}