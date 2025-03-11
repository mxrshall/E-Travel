import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useState } from "react";

function Link() {
    const [signal, setSignal] = useState(false);
    const [isExit, setIsExit] = useState(false);

    const list = [
        {
            author: "-",
            link: "https://wallpaperscraft.com/download/man_silhouette_mountains_117486/1280x1024",
        },
        {
            author: "manfredrichter",
            link: "https://pixabay.com/sk/photos/rondavels-tri-rondavels-1975312/",
        },
        {
            author: "UteHeine",
            link: "https://pixabay.com/sk/photos/tri-rondavels-hory-dra%C4%8Die-hory-207808/",
        },
        {
            author: "Rodrigo Casañas",
            link: "https://unsplash.com/photos/green-and-brown-mountain-beside-body-of-water-during-daytime-KUAsjGtvVS4",
        },
        {
            author: "Federica Bisso",
            link: "https://unsplash.com/photos/a-building-that-has-a-bunch-of-roof-tiles-on-it-nujEslI0ZS4",
        },
        {
            author: "Shibin Joseph",
            link: "https://unsplash.com/photos/an-aerial-view-of-a-courtyard-in-a-city-E07_O8poS1w",
        },
        {
            author: "Valensia Sumardi",
            link: "https://unsplash.com/photos/a-view-of-a-city-from-a-distance-tvXp7AOu7pg",
        },
        {
            author: "Seongho Jang",
            link: "https://unsplash.com/photos/brown-wooden-building-during-nighttime-Pjk2ux_FTkM",
        },
        {
            author: "sehoon ye",
            link: "https://unsplash.com/photos/a-bridge-over-a-body-of-water-with-a-building-in-the-background-o73MbZlL2Eo",
        },
        {
            author: "hyungname",
            link: "https://pixabay.com/sk/photos/z%C3%A1pad-slnka-no%C4%8Dn%C3%BD-poh%C4%BEad-3664096/",
        },
        {
            author: "Ricardo Gomez Angel",
            link: "https://unsplash.com/photos/castle-by-the-sea-under-blue-sky-TLjeanR8g08",
        },
        {
            author: "Stephan Wiesner",
            link: "https://unsplash.com/photos/photo-of-brown-castle-near-body-of-water-1Xhn_xQ5eSE",
        },
        {
            author: "Andrea Caramello",
            link: "https://unsplash.com/photos/house-near-the-river-oOZhEzwAmZc",
        },
        {
            author: "Jeff Golenski",
            link: "https://unsplash.com/photos/pine-trees-near-mountain-covered-with-snow-aCzud3scCbM",
        },
        {
            author: "Marco Bicca",
            link: "https://unsplash.com/photos/green-trees-near-lake-under-cloudy-sky-during-daytime-x4_4YXfczZk",
        },
        {
            author: "Adriane Kohl",
            link: "https://unsplash.com/photos/a-lake-with-mountains-in-the-background-mE7Y9A5aX2c",
        },
        {
            author: "Vincent van Zalinge",
            link: "https://unsplash.com/photos/trees-during-golden-hour-d78xhrxAPBI",
        },
        {
            author: "Vincent van Zalinge",
            link: "https://unsplash.com/photos/silhouette-of-giraffe-near-trees-Fslk_gnWr_8",
        },
        {
            author: "Jochen van Wylick",
            link: "https://unsplash.com/photos/the-sun-is-setting-over-the-horizon-of-a-field-KRkBTM8MMZY",
        },
        {
            author: "Joy Real",
            link: "https://unsplash.com/photos/cars-parked-near-brown-and-gray-concrete-building-during-daytime-sq1IiCp0pDE",
        },
        {
            author: "Austin Wehrwein",
            link: "https://unsplash.com/photos/city-buildings-under-cloudy-sky-during-sunset-djlipMcj3QM",
        },
        {
            author: "Danielle-Claude Bélanger",
            link: "https://unsplash.com/photos/a-very-tall-building-with-a-clock-on-its-face-y71pLSJYUEE",
        },
        {
            author: "Michaela Římáková",
            link: "https://unsplash.com/photos/a-large-waterfall-with-a-house-on-top-of-it-MhvqemfxdFc",
        },
        {
            author: "Michaela Římáková",
            link: "https://unsplash.com/photos/a-river-running-through-a-lush-green-forest-awMsp96lBD4",
        },
        {
            author: "Roland Matthys",
            link: "https://unsplash.com/photos/landscape-shot-of-body-of-water-8h51fxTgUpo",
        },
        {
            author: "Yohan Cho",
            link: "https://unsplash.com/photos/lighted-city-skyline-at-night-Mwvhyd22Lyw",
        },
        {
            author: "Ciaran O'Brien",
            link: "https://unsplash.com/photos/high-rise-buildings-LoGWCnEVDgU",
        },
        {
            author: "Mathew Schwartz",
            link: "https://unsplash.com/photos/aerial-photography-of-lighted-city-high-rise-buildings-during-dawn-01hH6y7oZFk",
        },
        {
            author: "Carmie",
            link: "https://unsplash.com/photos/a-bird-flying-over-the-ocean-with-a-mountain-in-the-background-Pehl6gXD79I",
        },
        {
            author: "Riëtte Fourie",
            link: "https://unsplash.com/photos/white-sand-beach-with-green-trees-and-mountain-in-distance-w8xfnboF3l0",
        },
        {
            author: "Peter Burdon",
            link: "https://unsplash.com/photos/white-and-brown-buildings-on-brown-mountain-near-body-of-water-during-daytime-F1po0flco3k",
        },
        {
            author: "Tobias Oetiker",
            link: "https://unsplash.com/photos/snow-mountaints-xpX6NpnzWDc",
        },
        {
            author: "Bingqi Huang",
            link: "https://unsplash.com/photos/a-mountain-covered-in-snow-under-a-blue-sky-RpoWA-ohSrA",
        },
        {
            author: "Mariska Helmendach",
            link: "https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-during-daytime-yFN8RSWOP_4",
        },
        {
            author: "jewad alnabi",
            link: "https://unsplash.com/photos/a-view-of-a-valley-and-mountains-from-the-top-of-a-mountain-YZIj5VNzwL4",
        },
        {
            author: "Dong Zhang",
            link: "https://unsplash.com/photos/brown-and-green-rock-mountain-during-day-time-ILYVeUgPkmI",
        },
        {
            author: "Jason Hillier",
            link: "https://unsplash.com/photos/polar-bear-on-seashore-8aVYkPi84AY",
        }
    ];

    return (
        <>
        <Navbar onClick={() => setIsExit(true)} signal={signal} />
        <div className="pt-32">
            {list.map((info) => (
                <div className="text-white font-mont font-normal ml-5">
                    <p>Author: {info.author}</p>
                    <p>Link: {info.link}</p>
                    <br />
                </div>
            ))}
        </div>
    </>
    
  );
}

export default Link;
