class Provider {
    static getWeather(city) {
        return Promise.resolve(`The weather of ${city} is Cloudy`);
    }

    static getLocalCurrency(city) {
        return Promise.resolve(`The local currency of ${city} is GBP`);
    }

    static findCity(long, lat) {
        return Promise.resolve('London')
    }
}