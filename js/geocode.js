
const geocodedata = (city, callback) => {

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=68eec9e1c5d3434d9f78a77944bbb904`


    fetch(url).then(resp => {
        return resp.json()
    }).then(data => {
        const lat = data.results[0].geometry.lat
        const lng = data.results[0].geometry.lng

        // console.log(`
        // lat : ${lat}
        // lng  : ${lng}
        // `);

        callback({ lat, lng })


    }).catch(err => {
        callback(undefined, err)

    })


}


module.exports = { geocodedata }  