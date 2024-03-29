import Button from "../Button"

function HomepageButton({link}) {

    return (
        <div className="w-full flex pt-[3%]">
            <Button text="O nás"/>
            <Button text="Prejsť na katalóg"/>
            <Button text="Zobraziť lokácie" link={link}/>
        </div>
    )
  }
  
  export default HomepageButton