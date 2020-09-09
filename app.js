const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=56bbc6f76fa91121aae7a4a8ab3b0466&query=37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})