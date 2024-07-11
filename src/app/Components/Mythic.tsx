import Image from "next/image";






export default function Mythic(){
              return(
                <>
                <section className=" ">
                    <div className=" relative">
                        <Image alt="img" height={1000} width={1000} src="/images/sec1.webp" className="h-[500px] w-full"></Image>
                        <div className=" flex justify-center">
                        <Image src="/images/my1.webp" alt="img" className=" h-[160px] w-[230px] absolute top-32" width={2000} height={2000}/>
                        </div>
                         <div className=" ">
                         <Image src="/images/grass.png" alt="img" className=" h-[500px] mt-[0px] absolute mx-auto  w-full" width={2000} height={2000}/>
                         <Image src="/images/birds.webp" alt="img" className=" h-[100px] md:h-[300px] 2xl:h-[430px] w-[200px] md:w-[700px] 2xl:w-[2000px] mt-[-150px] pb-[-100px] relative max-w-7xl mx-auto " width={2000} height={2000}/>
                         </div>
                    
                      
                    </div>
                      
                      
                </section>
                </>
              )
}