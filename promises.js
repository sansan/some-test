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

Provider.findCity(51.5074, 0.1278)
    .then((city) => console.log(city))
    .catch((e) => console.log(e));

// async/await provides better readability
console.log(await Provider.findCity(51.5074, 0.1278));