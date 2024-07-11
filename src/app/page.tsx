"use client"
// import Dummy from "./Components/Checkmotion";
import { AnimatePresence } from "framer-motion";
import Buynow from "./Components/Buynow";
import Lorem from "./Components/Lorem";
import Mythic from "./Components/Mythic";
import Typings from "./Components/Typings";
import Market from "./Components/Market";




export default function Home() {
  return (
    <>
     <AnimatePresence>
     <Mythic/>
     <Buynow/>
     <Lorem/>
     <Typings/>
     <Market/>
     </AnimatePresence>
     
     
     
     {/* <Dummy/> */}
     

    </>
  );
}
