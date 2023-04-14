function GetWeatherSymbol(symbol_code, day) {
    day = day
    symbol_code = symbol_code
    if (symbol_code == "clearsky_day") {
        return "images/clear_sky.svg";
    }
    if (symbol_code == "cloudy") {
        return "images/cloudy.svg";
    }
    if (symbol_code == "lightrain") {
        return "images/light_rain.svg";
    }
    if (symbol_code == "rain") {
        return "images/rain.svg";
    }
    if (symbol_code == "partlycloudy_day") {
        return "images/partly_clouded.svg";
    }
    if (symbol_code == "fair_day") {
        return "images/light_clouds.svg";
    }
    if (symbol_code == "heavyrain") {
        return "images/heavy_rain.svg";
    }
    if (symbol_code == "fair_night") {
        return "images/fair_night.svg";
    }
    if (symbol_code == "partlyclouded_night") {
        return "images/partly_clouded_night.svg";
    }
}