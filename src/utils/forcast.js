const request = require('request');
const forcast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=608bbb21c2601dc915bae8fe31c42897&query=${latitude},${longitude}`;

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback("we are not able to connect service", undefined);
        } else if (body.error) {
            callback("Couldn't find location", undefined);
        } else {
            const currentWeather = body.current;
            callback(undefined, {
                temperature: currentWeather.temperature,
                weather_descriptions: currentWeather.weather_descriptions,
                precip: currentWeather.precip
            })
        }
    });
};

module.exports = forcast;