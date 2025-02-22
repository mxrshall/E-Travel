import { motion } from "framer-motion";

function LandmarkPhoto({background, sendFotka}) {
    
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                src={background}
                loading="lazy"
                alt="Landmark"
                className="w-full h-[25vh] object-contain mb-5 cursor-pointer"
                onClick={handleClick}
            />
        </>
    )
  }
  
  export default LandmarkPhoto;