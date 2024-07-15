import { Button } from "@nextui-org/react";





export default function Joinustoday(){
       return(
        <>
            <section className=" bg-blue-image bg-fixed bg-cover bg-center">
                <div className=" max-w-7xl mx-auto py-[100px] space-y-10">
                <h2 className=" text-5xl font-black text-center text-[#c7ddff]">JOIN US TODAY!</h2>
                <p className=" font-inter text-base text-[#c7ddff] max-w-4xl mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare quis consequat eros ante congue magna at, curabitur tellus primis neque tortor accumsan bibendum vel dui tempor leo est ligula.</p>
                <div className=" flex justify-center gap-10">
                    <Button className=" hover:scale-110 uppercase font-black rounded-lg w-[220px] h-[50px] text-lightbrown text-2xl bg-[#74A81A]">JOIN Discord</Button>
                    <Button className=" hover:scale-110 uppercase font-black rounded-lg w-[180px] h-[50px] text-textbrown text-2xl bg-white ">register</Button>

                </div>

                </div>
            </section>
        </>
       )
}