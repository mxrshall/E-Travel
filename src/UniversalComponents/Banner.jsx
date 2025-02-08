import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Banner({ isExit }) {

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
        setIsVisible(true);
    }
}, []);
  
const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
};
  
if (!isVisible) return null;

return (
        <motion.div 
            className="w-1/4 h-[25vh] rounded-xl bg-white fixed bottom-0 right-0 z-50 m-10 p-5"
            initial={{ opacity: 0 }}
            animate={isExit === false ? { opacity: 1 } : { opacity: 0 }}
            transition={isExit === false ? { duration: 0.3, delay: 1.5 } : { duration: 0.3, delay: 0.5 }}
        >
            <p className="text-sm font-medium font-mont">
                This website uses Google Analytics to measure the time spent on the page. The results helps to determine the average time users spend on this site.
            </p>
            <button 
                className="font-mont text-sm font-medium px-2 text-black border-2 border-black hover:bg-black hover:text-white mt-5"
                onClick={handleAccept}
            >
                I understand
            </button>
        </motion.div>
    )
}

export default Banner