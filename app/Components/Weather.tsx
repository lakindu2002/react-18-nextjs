type Weather = {
    temperature: number,
    humidity: number
}

const getWeather = () => {
    const weather: Weather = {
        temperature: 20,
        humidity: 50,
    }
    const promise: Promise<Weather> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(weather)
        }, 2000)
    });
    return promise;
}

export default async function WeatherComponent() {
    const weather = await getWeather();
    return (
        <>
            <p>This is the weather</p>
            <p>Temperature: {weather.temperature}</p>
            <p>Humidity: {weather.humidity}</p>
        </>
    )
}