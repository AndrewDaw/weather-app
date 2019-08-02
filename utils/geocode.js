/*Geocode api
*Geocode geocode function
*address: Search term e.g. London England
*mapBoxKey: api key. aquire from mapbox.com
*language: prefferred language of result e.g. en
*callback:function that will be called when results are available
*/


const request = require('request')

const geocode = (address, mapboxKey, language, callback) => {
    const mapBoxUrl = 
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
    '.json?access_token=' + encodeURIComponent(mapboxKey) +
    '&language=' + encodeURIComponent(language)



    request({ url: mapBoxUrl, json: true}, (error, response)=>{

        if(error){
          callback('Unable to get connection', undefined)
        } else if (response.body.features.length == 0){
         callback('Unable to find location', undefined)
        }else{
            callback(undefined,{
                lat: response.body.features[0].center[1],
                lng: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode