const request = require('request')
const tempConvert = require('temp-units-conv')
const geocode = require('./utils/geocode')
//open weather api key required 
const weatherKey = ''
const mapboxKey = ''
const language = 'en'


// const weatherUrl = 
// 'http://api.openweathermap.org/data/2.5/weather?lat=-41.2865&lon=174.7762&appid=' +
// weatherKey +
// '&units=metric' +
// '&lang=' +
// language

// request({ url: weatherUrl, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to get weather')
//     } else if (response.body.cod === '400'){
//         console.log('Unable to find location')
//     }else{
//         console.log('It is currently '+
//         response.body.main.temp +
//         ' degrees celsius with '+
//         response.body.weather[0].description +
//         ' in '+
//         response.body.name)
//     }
    
// })





geocode('Wellington NZ', mapboxKey, language, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})