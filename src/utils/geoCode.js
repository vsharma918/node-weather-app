const request = require('request');

const geoCode = (adress, callback) => {
    const geoApiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1IjoidnNoYXJtYTkxOCIsImEiOiJja2JnZmo0aTkxNHZtMnNzN3BhMnRvNXA2In0.UlBZYIcuOlt69U_my-TO1A&limit=1`;

    request({
        url: geoApiUrl,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Not able to connect map service',undefined);
        } else if (body.features.length === 0) {
            callback('Couldn\'t find any location. please try different.',undefined);
        } else {
            const placeInfo = body.features[0];
            callback(undefined,{
                longitude: placeInfo.geometry.coordinates[0],
                latitude: placeInfo.geometry.coordinates[1],
                location:placeInfo.place_name
            });            
        }
    });
}
module.exports = geoCode;