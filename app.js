const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//open weather api key required 
const weatherKey = ''
const mapboxKey = ''
const language = 'en'







var lat = -41.28889
var lng = 174.77722
geocode('Wellington NZ', mapboxKey, language, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    lat = data.lat
    lng = data.lng
})



forecast(lat, lng, weatherKey, language, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})