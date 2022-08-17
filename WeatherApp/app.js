const geoCode = require('./utils/geoCode')
const weatherStat = require('./utils/weatherStat')

const address = process.argv[2]

geoCode(address, (geoCodeerror, geoData) => {
    if (geoCodeerror) {
        return console.log('Error:', geoCodeerror)
    }
    console.log(geoData.latitude, geoData.longitude)
    weatherStat(geoData.location, geoData.latitude, geoData.longitude, (weatherStaterror, weatherData) => {
        if (weatherStaterror) {
            return console.log('Error:', weatherStaterror)
        }
        console.log(weatherData)
    })
})

