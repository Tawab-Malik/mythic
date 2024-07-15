import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";





export default function Footer(){
           return(
            <>
            <footer className=" bg-[#130D0C] py-[100px]">
                <div className=" max-w-7xl mx-auto space-y-10">
                    <div className=" flex justify-center">
                    <Image src="/images/my1.webp" alt="img" height={200} width={200}/>
                    </div>
                    {/* list */}
                    <ul className=" grid grid-cols-7 max-w-5xl mx-auto place-items-center ">
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">about</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">roadmap</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">Tokenomics</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">whitepaper</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">faqs</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">Howtobuy?</Link></li>
                        <li><Link href="/" className=" uppercase text-lightbrown text-base font-semibold">contact us</Link></li>
                    </ul>
                    <div className="flex justify-center">
                    <Image src="/images/footerarrow.webp" className=" w-[500px] h-[15px]" alt="img" height={500} width={1000}/>
                    </div>
                       {/* links */}
                       <ul className=" flex justify-center gap-5">
                       <li><Link href="/"><FaDiscord className=" text-[#CD7C47] hover:text-lightbrown duration-500 size-8"/></Link></li>
                        <li><Link href="/"><FaTelegramPlane className="text-[#CD7C47] hover:text-lightbrown duration-500 size-8"/></Link></li>
                        <li><Link href="/"><FaYoutube className=" text-[#CD7C47] hover:text-lightbrown duration-500 size-8"/></Link></li>
                        <li><Link href="/"><FaXTwitter className=" text-[#CD7C47] hover:text-lightbrown duration-500 size-8"/></Link></li>
                        <li><Link href="/"><FaTelegramPlane className="text-[#CD7C47] hover:text-lightbrown duration-500  size-8"/></Link></li>
                       </ul>
                       <p className=" text-base text-[#887875] text-center">Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction. Do Your Own Research (DYOR) before participating because cryptocurrency may be regulated in your jurisdiction. This website is not intended for UK and Canadian Citizens.</p>
                </div>
            </footer>
            </>
           )
}