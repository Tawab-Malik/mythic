"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Image from "next/image";
// Manually provide the image path as a string
const logoPath = "/images/image.webp";
const Navimg = "/images/navbar.png"

export default function Navbars() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        // <Navbar className="!justify-between  bg-[url(/images/navbar.png)] mt-5 h-20 bg-cover bg-center" classNames={{
        //     wrapper: '!max-w-[1600px] mx-auto !justify-between',


        // }}>
        //     <NavbarContent className="lg:hidden block" justify="start">
        //         <NavbarMenuToggle />
        //     </NavbarContent>

        //     <NavbarBrand className=" " >
        //             <Image src={logoPath} alt="Logo" height={500} width={500} className=" !w-[100px] h-[75px]" />
        //     </NavbarBrand>


        //     <NavbarContent className="hidden sm:flex gap-10" justify="center">
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 ABOUT
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 ROADMAP
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 TOKENOMICS
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 WHITEPAPER
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 FAQs
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 HOW TO BUY?
        //             </Link>
        //         </NavbarItem>
        //         <NavbarItem>
        //             <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
        //                 CONTACTS US
        //             </Link>
        //         </NavbarItem>


        //     </NavbarContent>

        //     <NavbarContent justify="end">
        //         <NavbarItem className="hidden lg:flex">
        //             <Button as={Link} color="warning" href="#" className=" h-[50PX] !w-[100px] text-xl font-black text-[#e5d1cd] bg-transparent border-white border rounded-[8px]  ">
        //                 Sign Up
        //             </Button>
        //         </NavbarItem>
        //         <NavbarItem className="hidden lg:flex">
        //             <Button as={Link} color="warning" href="#" className=" h-[50PX] !w-[144px] bg-[#74A81A] text-[#e5d1cd] text-xl font-black">
        //                 BUY NOW
        //             </Button>
        //         </NavbarItem>
        //     </NavbarContent>

        //     <NavbarMenu>
        //         {menuItems.map((item, index) => (
        //             <NavbarMenuItem key={`${item}-${index}`}>
        //                 <Link
        //                     className="w-full"
        //                     color={
        //                         index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
        //                     }
        //                     href="#"
        //                     size="lg"
        //                 >
        //                     {item}
        //                 </Link>
        //             </NavbarMenuItem>
        //         ))}
        //     </NavbarMenu>
        // </Navbar>





        <Navbar isBordered isBlurred={false} className=" !bg-transparent !max-w-[1600px] !mx-auto fixed  bg-[url(/images/navbar.png)] mt-5 h-20 bg-cover bg-center" classNames={{
            wrapper: '!max-w-[1600px] mx-auto ',


        }}>
            <NavbarContent className="xl:hidden block" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>
            <div className=" gap-4  contents " >
                <div className="flex">

                    <Image src={logoPath} alt="Logo" height={500} width={500} className=" !w-[100px] h-[75px]" />
                </div>
                <div className=" gap-5 2xl:gap-10 hidden xl:flex">
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        ABOUT
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        ROADMAP
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        TOKENOMICS
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        WHITEPAPER
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        FAQs
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        HOW TO BUY?
                    </Link>
                    <Link color="foreground" href="#" className=" text-base font-semibold text-lightbrown font-inter">
                        CONTACTS US
                    </Link>
                </div>
                <div className=" gap-5 hidden xl:flex">
                    <Button as={Link} color="warning" href="#" className=" h-[50PX] !w-[100px] text-xl font-black text-[#e5d1cd] bg-transparent border-white border rounded-[8px]  ">
                        Sign Up
                    </Button>
                    <Button as={Link} color="warning" href="#" className=" h-[50PX] !w-[144px] bg-[#74A81A] text-[#e5d1cd] text-xl font-black">
                        BUY NOW
                    </Button>
                </div>

            </div>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
