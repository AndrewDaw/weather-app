const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//open weather api key required 
const weatherKey = ''
const mapboxKey = ''
const language = 'en'


//gets input, exits if doesnt exist
const inputLoc = process.argv[2]
if (!inputLoc){
    console.log('Please provide a location')
    return
}

geocode(inputLoc, mapboxKey, language, (error, locationData) => {

    // console.log('Data', data)
    if(error){
        return console.log('Error', error)
    }

    forecast(locationData.lat, locationData.lng,
            weatherKey, language, (error, forecastData) => {
        if(error){
            return console.log('Error', error)
        }
        console.log('Location: '+ locationData.location)
        console.log("It is " + forecastData.temp + "C with " +
                    forecastData.describe + ' in '+ locationData.location)
    })
    
})



