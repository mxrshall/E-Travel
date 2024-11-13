import Title from "../UniversalComponents/Title"
import Description from "../UniversalComponents/Description"
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import InfoFlag from "../LocationComponents/LocationFlag"
import Slider from "../UniversalComponents/Slider"

import { useState } from "react"
import Navbar from "../Navbar/Navbar";


function Location() {
    const [isExit, setIsExit] = useState(false);
    const location = useLocation();
    const { state1, state2 } = location.state || {};
    const navigate = useNavigate();

    const handleClick = (value) => () => {
      setIsExit(true);
      setTimeout(() => {
          window.location.href = `/${value}`;
      }, 1000);
    };
    
    const handleSliderClick = (data) => {
      setIsExit(true);
      setTimeout(() => {
          navigate("/pamiatka", { state: data });
      }, 1000);
    };
  
    return (
      <>
      <Navbar />
      <div className="w-full h-[100vh] flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isExit ? { opacity: 0 } : { opacity: 1 }}
          transition={isExit ? { duration: 0.3, delay: 0.1 } : { duration: 0.5, delay: 0.5 }}
          className="w-full h-[100vh] bg-cover bg-center absolute"
          style={{ backgroundImage: `url(${state1.background})` }}
        >
          <div className="w-full h-[100vh] bg-black opacity-50"></div>
        </motion.div>
        <div className="flex absolute z-10">
          <>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isExit ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
              transition={isExit ? { duration: 0.3, delay: 0.2 } : { duration: 0.5, delay: 1 }} 
              className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black"
            >
              <div className="flex">
                <Title title={state1.title}/>
                <InfoFlag flag={state1.flag}/>
              </div>
              <Description description={state1.description}/>
              <div className="w-full flex pt-[3%]">
                <button onClick={handleClick("katalog")} className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black">Prejsť na katalóg</button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={isExit ? { opacity: 0 } : { opacity: 1 }} 
              transition={isExit ? { duration: 0.3, delay: 0.2 } : { duration: 0.5, delay: 1 }} 
              className="w-5/12 h-[100vh] flex justify-center items-center"
            >
              <Slider slider={state2} tag={state1.tag} onClick={handleSliderClick}/>
            </motion.div>
          </>
        </div>
      </div>
      </>
    )
  }
  
  export default Location