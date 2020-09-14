const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=56bbc6f76fa91121aae7a4a8ab3b0466&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGlteW5hbWVpc2VyaWNicm9va3MiLCJhIjoiY2tld2JqemZzMm8yMDJzcG5uZWRrNTVnNyJ9.wl7UoQXjVU8fqI3yltejww&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

const geocode = (address, callback) => {
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGlteW5hbWVpc2VyaWNicm9va3MiLCJhIjoiY2tld2JqemZzMm8yMDJzcG5uZWRrNTVnNyJ9.wl7UoQXjVU8fqI3yltejww&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!')
        }
    })
}

geocode('New York', (error, callback) => {

})