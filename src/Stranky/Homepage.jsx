import header3 from "../images/header/header3.jpg"
import HomepageTitle from "../HomepageComponents/HomepageTitle"
import HomepageDescription from "../HomepageComponents/HomepageDescription"
import HomepageButton from "../HomepageComponents/HomepageButton"
import Navbar from "../Navbar/Navbar"

function Homepage() {

    return (
        <>
            <Navbar/>
            <div className="w-9/12 h-[100vh] pt-[12%] pl-[5%] flex flex-col absolute z-10">
                <HomepageTitle/>
                <HomepageDescription/>
                <HomepageButton link="info"/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
        </>
    )
  }
  
  export default Homepage