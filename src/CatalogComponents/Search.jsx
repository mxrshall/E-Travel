import React, { useState } from "react";

function Search({ sendData }) {
    const [selectedNames, setSelectedNames] = useState([]);

    const handleCheckboxChange = (e) => {
        const name = e.target.name;
        if (e.target.checked) {
            setSelectedNames([...selectedNames, name]); //pridat
        } else {
            setSelectedNames(selectedNames.filter(item => item !== name)); //odstranit
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(selectedNames);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-20 md:mt-10">
            <div className="flex">
                <div className="pr-6 md:px-8">
                    <div className="my-2">
                        <input name="korea" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base">Južná Kórea</label>
                    </div>
                    <div className="my-2">
                        <input name="svajciarsko" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base">Švajčiarsko</label>
                    </div>
                    <div className="my-2">
                        <input name="kanada" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Kanada</label>
                    </div>
                    <div className="my-2">
                        <input name="afrika" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Južná Afrika</label>
                    </div>
                </div>
                <div className="px-0 border-l-2 border-r-2 border-black md:border-white md:px-8">
                    <div className="my-2">
                        <input name="priroda" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Príroda</label>
                    </div>
                    <div className="my-2">
                        <input name="pamiatka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Pamiatky</label>
                    </div>
                    <div className="my-2">
                        <input name="mesto" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Mesto</label>
                    </div>
                </div>
                <div className="pl-6 md:px-8">
                    <div className="my-2">
                        <input name="tropicka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Tropické</label>
                    </div>
                    <div className="my-2">
                        <input name="studena" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
                        <label className="text-sm text-white font-normal font-mont md:text-base" >Studené</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
                <input type="submit" value="Vyhľadať" className="text-lg text-white font-normal font-mont md:text-base"/>
            </div>
        </form>
    );
}

export default Search;
