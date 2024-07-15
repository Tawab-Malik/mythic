import { Image } from "@nextui-org/react";
import Faq from "./Faqs";




export default function Team(){
     return(
        <>
          <section className=" bg-red-image bg-center bg-cover bg-fixed py-[100px]">
            <div className=" max-w-7xl mx-auto "> 
                 <h2 className=" text-5xl font-black text-lightbrown text-center">OUR TEAM</h2>
                  {/* team carts */}
                 <div className=" grid grid-cols-5 place-items-center py-12">
                       {/* cart1  */}
                      <div className=" space-y-5">
                        <div className=" border-4 overflow-hidden border-[#74a81a] rounded-full">
                        <Image src="/images/team/1.webp"   className=" hover:scale-[1.1]  rounded-full h-[200px] w-[200px]" alt="img" height={300} width={300}/>
                        </div>
                        <h2 className=" text-2xl text-lightbrown font-black text-center">SYLVESTER</h2>
                        <Image src="/images/team/arrows.webp" className=" h-[15px] w-[200px]" alt="img" height={300} width={300}/>
                        <h3 className=" text-base text-lightbrown text-center">Project Manager</h3>
                      </div>
                        {/* cart2  */}
                        <div className=" space-y-5">
                        <div className=" border-4 overflow-hidden border-[#74a81a] rounded-full">
                        <Image src="/images/team/2.webp"   className=" hover:scale-[1.1]  rounded-full h-[200px] w-[200px]" alt="img" height={300} width={300}/>
                        </div>
                        <h2 className=" text-2xl text-lightbrown font-black text-center">GUSTAVO</h2>
                        <Image src="/images/team/arrows.webp" className=" h-[15px] w-[200px]" alt="img" height={300} width={300}/>
                        <h3 className=" text-base text-lightbrown text-center">Community Manager</h3>
                      </div>
                        {/* cart3  */}
                        <div className=" space-y-5">
                        <div className=" border-4 overflow-hidden border-[#74a81a] rounded-full">
                        <Image src="/images/team/3.webp"   className=" hover:scale-[1.1]  rounded-full h-[200px] w-[200px]" alt="img" height={300} width={300}/>
                        </div>
                        <h2 className=" text-2xl text-lightbrown font-black text-center">SCOTT</h2>
                        <Image src="/images/team/arrows.webp" className=" h-[15px] w-[200px]" alt="img" height={300} width={300}/>
                        <h3 className=" text-base text-lightbrown text-center">Developer</h3>
                      </div>
                        {/* cart4  */}
                        <div className=" space-y-5">
                        <div className=" border-4 overflow-hidden border-[#74a81a] rounded-full">
                        <Image src="/images/team/4.webp"   className=" hover:scale-[1.1]  rounded-full h-[200px] w-[200px]" alt="img" height={300} width={300}/>
                        </div>
                        <h2 className=" text-2xl text-lightbrown font-black text-center">AUBREY  </h2>
                        <Image src="/images/team/arrows.webp" className=" h-[15px] w-[200px]" alt="img" height={300} width={300}/>
                        <h3 className=" text-base text-lightbrown text-center">Marketing</h3>
                      </div>
                         {/* cart5  */}
                         <div className=" space-y-5">
                        <div className=" border-4 overflow-hidden border-[#74a81a] rounded-full">
                        <Image src="/images/team/5.webp"   className=" hover:scale-[1.1]  rounded-full h-[200px] w-[200px]" alt="img" height={300} width={300}/>
                        </div>
                        <h2 className=" text-2xl text-lightbrown font-black text-center">SETH</h2>
                        <Image src="/images/team/arrows.webp" className=" h-[15px] w-[200px]" alt="img" height={300} width={300}/>
                        <h3 className=" text-base text-lightbrown text-center">Artist</h3>
                      </div>

                      
                 </div>
                   {/* FAQS */}
                   <div className="pt-[50px]">
                   <h2 className=" text-5xl font-black text-lightbrown text-center">FAQS</h2>
                           {/* Faqs Start  */}
                    <div>
                        <Faq/>
                    </div>

                   </div>
                   
            </div>
          </section>
        </>
     )
}