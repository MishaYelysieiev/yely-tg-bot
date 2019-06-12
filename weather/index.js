const fetch = require('node-fetch');
const {appID} = require('./config');


module.exports = async function(city= "Kiev") {
    try{
        const result = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appID}`)).json();
        if(result.cod!==200){
            throw new Error(result.message)
        }
        return`Weather in ${city} is ${result.weather[0].main}, temperature - ${(result.main.temp - 273).toFixed(2)}°C`

    }catch (err) {
        return err.message;
    }
};
