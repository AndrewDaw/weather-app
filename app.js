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

geocode(inputLoc, mapboxKey, language, (error, {lat, lng, location}) => {

    // console.log('Data', data)
    if(error){
        return console.log('Error', error)
    }

    forecast(lat, lng,
            weatherKey, language, (error, {temp, describe}) => {
        if(error){
            return console.log('Error', error)
        }
        console.log("It is " + temp + "C with " +
                    describe + ' in '+ location)
    })
    
})



