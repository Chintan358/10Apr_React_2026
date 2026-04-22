const geocode = require("./geocode")
const weather = require("./weather")

const city = "baroda,gujarat,india"
geocode.geocodedata(city,(data,err)=>{
    if(err)
    {
        console.log(err); 
        return
    }
    else{
        
        weather.weatherdata(data.lat,data.lng,(data,err)=>{

            console.log(`
                city : ${data.city}
                temp : ${data.temp}
                pressure : ${data.pressure}
                humidity : ${data.humidity}
                `);
            
        })
        
    }
})




