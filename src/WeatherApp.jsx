import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bhandara",
    feelsLike: 36.15,
    humidity: 19,
    temp: 37.76,
    tempMax: 37.76,
    tempMin: 37.76,
    weather: "scattered clouds",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <h2>Weather App by OMA </h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </>
  );
}
