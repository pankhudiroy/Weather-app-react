import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit'; //snow,winter
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 
import CloudIcon from '@mui/icons-material/Cloud';    //cloud
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';  //rain
import FoggyIcon from '@mui/icons-material/Foggy';

export default function InfoBox({info}){

    function getWeatherImage(info) {
        if (!info) return "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

        // Example: condition-based
        if (info.weather.toLowerCase().includes("rain")) {
            return "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
        } else if (info.weather.toLowerCase().includes("cloud")) {
            return "https://images.unsplash.com/photo-1708552592233-5934a64eaec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
        } else if (info.weather.toLowerCase().includes("snow")) {
            return "https://images.unsplash.com/photo-1549136430-c2e0aadfc69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd2ZhbGx8ZW58MHx8MHx8fDA%3D";
        } else if (info.weather.toLowerCase().includes("mist")){
            return "https://plus.unsplash.com/premium_photo-1710248800801-697bd5323129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1pc3R8ZW58MHx8MHx8fDA%3D"
        } else if (info.temp > 30) {
            return "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VufGVufDB8fDB8fHww";
        } else if (info.temp < 15) {
            return "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyfGVufDB8fDB8fHww";
        } else if (info.humidity > 70) {
            return "https://plus.unsplash.com/premium_photo-1733436275745-495339c92197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtaWQlMjB3ZWF0aGVyJTIwb3IlMjByYWlufGVufDB8fDB8fHww";
        } else {
            return "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
        }
    }
    function getIcon(info) {

        if (info.weather.toLowerCase().includes("rain")) {
            return <CloudySnowingIcon/>;
        } else if (info.weather.toLowerCase().includes("cloud")) {
            return <CloudIcon/>;
        } else if (info.weather.toLowerCase().includes("snow")) {
            return <AcUnitIcon/>;
        } else if (info.weather.toLowerCase().includes("mist")){
            return <FoggyIcon/>
        } else if (info.temp > 16) {
            return <SunnyIcon/>
        } else if (info.temp < 15) {
            return <AcUnitIcon/>;
        } else if (info.humidity > 70) {
            return <ThunderstormIcon/>;
        } else {
            return <CloudIcon/>;
        }
    }


    return(
        <div className='infobox' style={{marginTop: "3rem"}}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={getWeatherImage(info)}
                alt="Weather img"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <span>{info.city} {getIcon(info)}</span>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                    <p>Humidity = {info.humidity}</p>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    )
}