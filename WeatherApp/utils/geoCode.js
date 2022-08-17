const request = require('postman-request')

const geoCode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=bbe8b08af9db4ea4767d1ce79dd09cad&query=' + encodeURIComponent(address)
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to positionstack', undefined)
        }
        if (response.body.error) {
            callback(response.body.error.message, undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].name
            })
        }

    })
}

module.exports = geoCode