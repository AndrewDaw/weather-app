/*Forecast api
*Geocode geocode function
*address: Search term e.g. London England
*mapBoxKey: api key. aquire from mapbox.com
*language: prefferred language of result e.g. en
*callback:function that will be called when results are available
*/


const request = require('request')

const forecast = (lat, lng, weatherKey, language, callback) => {
    const weatherUrl = 
    'http://api.openweathermap.org/data/2.5/weather?lat='+ encodeURIComponent(lat) +
    '&lon='+ encodeURIComponent(lng) +
    '&appid=' + encodeURIComponent(weatherKey) +
    '&units=metric' +
    '&lang=' + encodeURIComponent(language)

    request({ url: weatherUrl, json: true}, (error, response)=>{
        if(error){
            callback('Unable to get weather', undefined)
        } else if (response.body.cod === '400'){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
            temp : response.body.main.temp,
            describe: response.body.weather[0].description,
            place: response.body.name
            })
        }
    
    })

}

module.exports = forecast