import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    let [info, setInfo] =useState({
            city: "Wonderland",
            temp : "23",
            tempMin: "21",
            tempMax: "25",
            humidity: "56",
            feelsLike: "22.5",
            weather: "Haze",
    });

    return(
        <>
         <SearchBox setInfo={setInfo}/>
         <InfoBox info={info}/>
        </>
    )
}