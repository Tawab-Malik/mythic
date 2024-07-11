"use client"
// import Dummy from "./Components/Checkmotion";
import { AnimatePresence } from "framer-motion";
import Buynow from "./Components/Buynow";
import Lorem from "./Components/Lorem";
import Mythic from "./Components/Mythic";
import Typings from "./Components/Typings";
import Market from "./Components/Market";
import Tokenomics from "./Components/Tokenomic";




export default function Home() {
  return (
    <>
     <AnimatePresence>
     <Mythic/>
     <Buynow/>
     <Lorem/>
     <Typings/>
     <Market/>
     <Tokenomics/>
     </AnimatePresence>
     
     
     
     {/* <Dummy/> */}
     

    </>
  );
}
