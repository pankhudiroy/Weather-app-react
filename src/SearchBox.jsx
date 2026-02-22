import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({setInfo}){
   let [city, setCity]= useState("");
   let [err, setErr]= useState(false);
   const URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY= "abdd86ec968999dc304e9e358a6484e5";

   async function getWeather(){
    try{
        let res= await fetch (`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let resJson= await res.json();
        let info= {
            city: city,
            temp : resJson.main.temp,
            tempMin: resJson.main.temp_min,
            tempMax: resJson.main.temp_max,
            humidity: resJson.main.humidity,
            feelsLike: resJson.main.feels_like,
            weather: resJson.weather[0].main,
        }
        setInfo(info);
        console.log(resJson);
        console.log(info);
        setErr(false);
    }catch(err){
        setErr(true);
    }
   
   }

   function handleInput(event){
    setCity(event.target.value);
   }
   function handleSubmit(event){
    event.preventDefault();
    console.log(city);
    getWeather();
    setCity("");
   }


    return(
        <>
         <h2>Search for the weather</h2>
         <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name *" variant="outlined" value={city} onChange={handleInput}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
         </form>
         {err && <p style={{color: "red"}}>No such place found!</p>}
        </>
    )
}