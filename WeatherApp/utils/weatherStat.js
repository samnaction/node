const request = require('postman-request')

const weatherStat = (location, latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=6673eeb36beb02107676752d8430985d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) { //low network error like no internet access
            callback('Unable to connect to weatherstack', undefined)
        }
        else if (response.body.error) {
            callback(response.body.error.info, undefined)
        }
        else {
            const data = `${location} is currently ${response.body.current.temperature} degrees.It feels like ${response.body.current.feelslike} degrees. It is ${response.body.current.weather_descriptions[0]}`
            callback(undefined, data)
        }
    })
}

module.exports = weatherStat

