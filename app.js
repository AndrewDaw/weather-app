const request = require('request')
const tempConvert = require('temp-units-conv')
//open weather api key required 
const key = ''


const url = 'http://api.openweathermap.org/data/2.5/weather?lat=-41.2865&lon=174.7762&appid='+key

request({ url: url, json: true}, (error, response)=>{
    console.log('It is currently '+
    tempConvert.k2c(response.body.main.temp).toFixed(2) +
    ' degrees celsius with '+
    response.body.weather[0].description +
    ' in '+
    response.body.name)
})