"use client"
// import Dummy from "./Components/Checkmotion";
import { AnimatePresence } from "framer-motion";
import Buynow from "./Components/Buynow";
import Lorem from "./Components/Lorem";
import Mythic from "./Components/Mythic";
import Typings from "./Components/Typings";
import Market from "./Components/Market";
import Tokenomics from "./Components/Tokenomic";
import Team from "./Components/Team";
import Joinustoday from "./Components/JoinusToday";
import Footer from "./Components/Footer";




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
     <Team/>
     <Joinustoday/>
     <Footer/>
     </AnimatePresence>
     
     
     
     {/* <Dummy/> */}
     

    </>
  );
}
