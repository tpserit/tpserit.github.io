async function FetchWeatherAPIData() {
    url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=68.80112&lon=16.54414";
    const headers = {
        'User-Agent': 'Bakgården Info Web App, utvilket av Serit Hålogaland',
        'From': 'marcus.heggen@harstad.serit.no'
    };
    let response = await fetch(url/*, data = headers*/); // LIVE WEATHER DATA - UNCOMMENT WHEN PUSHED TO PRODUCTION
    //let response = await fetch("data/JSON_Weather_Data.json"); // TEMP DATASOURCE - REMOVE WHEN PUSH TO PRODUCTION
    
    //CHECK CONNECTION TO API ENDPOINT
    if (response.ok) {
        // Fetch JSON DATA
        let json = await response.json();

        // PASS JSON DATA TO PARSE FUNCTION (ParseWeatherData.js)
        ParseWeatherData(json)
    } else {
        console.log("HTTP Error: " + response.status);
    }
}

FetchWeatherAPIData();