class Provider {
    static getWeather(city) {
        return Promise.resolve(`The weather of ${city} is Cloudy`);
    };

    static getLocalCurrency(city) {
        return Promise.resolve(`The local currency of ${city} is GBP`);
    };

    static findCity(long, lat) {
        return Promise.resolve('London')
    };
}

// Section 2 - Question 1
Provider.findCity(51.5074, 0.1278)
    .then((city) => console.log(city))
    .catch((e) => console.log(e));

// async/await provides better readability
const findCity = async(long, lat) => await Provider.findCity(51.5074, 0.1278);
console.log(await findCity(51.5074, 0.1278));

// Section 2 - Question 2
const printWeather = (long, lat) => {
    Provider.findCity(long, lat).then((city) => {
        Provider.getWeather(city).then((weather) => console.log(weather));
    });
}

const asyncWeather = async (logn, lat) => {
    const city = await findCity(logn, lat); 
    const weather = await Provider.getWeather(city);

    console.log(weather);
}

printWeather(51.5074, 0.1278);
asyncWeather(51.5074, 0.1278);

// Section 2 - Question 3
const printWeatherCurrency = (city) => {
    Promise.all([Provider.getWeather(city), Provider.getLocalCurrency(city)])
        .then(([weather, currency]) => {
            console.log(weather);
            console.log(currency);
        });
}

printWeatherCurrency('London');