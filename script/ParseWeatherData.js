function ParseWeatherData(json) {
    var timeseries_array = json.properties.timeseries;
    
    const date = new Date()
    let current_hour = date.getHours();
    let current_day = date.getDate();
    let current_month = date.getMonth()+1;
    let current_year = date.getYear()+1900;
    let weather_day = 18;

    
    ////////////////////////////////////
    // ASSING VALUES TO WEATHER CARDS //
    ////////////////////////////////////

    // const wc1_date = current_day;
    // // document.getElementById("wc-1_time").innerText = GetWeatherData(wc1_date, timeseries_array).time;
    // document.getElementById("wc-1_time").innerText = "Været akkurat nå:"
    // document.getElementById("wc-1_air_temperature").innerText = Math.round(GetWeatherData(wc1_date, timeseries_array).air_temperature) + " °";
    // document.getElementById("wc-1_wind_speed").innerText = Math.round(GetWeatherData(wc1_date, timeseries_array).wind_speed) + " m/s";
    // document.getElementById("wc-1_wind_arrow").style = "transform: rotate(" + GetWeatherData(wc1_date, timeseries_array).wind_direction + "deg)";
    // document.getElementById("wc-1_icon").data = (GetWeatherData(wc1_date, timeseries_array).symbol_icon);

    
    const wc2_date = weather_day;
    if (wc2_date < 10) {
        document.getElementById("wc-2_time").innerText = "0" + wc2_date + ".0" + current_month + "." + current_year + " kl.18-24";
    } else {
        document.getElementById("wc-2_time").innerText = wc2_date + ".0" + current_month + "." + current_year + " kl.18-24";
    }
    document.getElementById("wc-2_air_temperature").innerText = Math.round(GetAverageWeatherData.AverageAirTemp(wc2_date, 17, timeseries_array)) + " °";
    document.getElementById("wc-2_wind_speed").innerText = Math.round(GetAverageWeatherData.AverageWindSpeed(wc2_date, 17, timeseries_array)) + " m/s";
    document.getElementById("wc-2_wind_arrow").style = "transform: rotate(" + GetAverageWeatherData.AverageWindDirection(wc2_date, 17, timeseries_array) + "deg)";
    document.getElementById("wc-2_icon").data = (GetAverageWeatherData.AverageSymbolIcon(wc2_date, 17, timeseries_array, current_day));

    
    const wc3_date = weather_day + 1;
    if (wc3_date < 10) {
        document.getElementById("wc-3_time").innerText = "0" + wc3_date + ".0" + current_month + "." + current_year + " kl.18-24";
    } else {
        document.getElementById("wc-3_time").innerText = wc3_date + ".0" + current_month + "." + current_year + " kl.18-24";
    }
    document.getElementById("wc-3_air_temperature").innerText = Math.round(GetAverageWeatherData.AverageAirTemp(wc3_date, 17, timeseries_array)) + " °";
    document.getElementById("wc-3_wind_speed").innerText = Math.round(GetAverageWeatherData.AverageWindSpeed(wc3_date, 17, timeseries_array)) + " m/s";
    document.getElementById("wc-3_wind_arrow").style = "transform: rotate(" + GetAverageWeatherData.AverageWindDirection(wc3_date, 17, timeseries_array) + "deg)";
    document.getElementById("wc-3_icon").data = (GetAverageWeatherData.AverageSymbolIcon(wc3_date, 17, timeseries_array, current_day));

    
    const wc4_date = weather_day + 2;
    if (wc4_date < 10) {
        document.getElementById("wc-4_time").innerText = "0" + wc4_date + ".0" + current_month + "." + current_year + " kl.18-24";
    } else {
        document.getElementById("wc-4_time").innerText = wc4_date + ".0" + current_month + "." + current_year + " kl.18-24";
    }
    document.getElementById("wc-4_air_temperature").innerText = Math.round(GetAverageWeatherData.AverageAirTemp(wc4_date, 17, timeseries_array)) + " °";
    document.getElementById("wc-4_wind_speed").innerText = Math.round(GetAverageWeatherData.AverageWindSpeed(wc4_date, 17, timeseries_array)) + " m/s";
    document.getElementById("wc-4_wind_arrow").style = "transform: rotate(" + GetAverageWeatherData.AverageWindDirection(wc4_date, 17, timeseries_array) + "deg)";
    document.getElementById("wc-4_icon").data = (GetAverageWeatherData.AverageSymbolIcon(wc4_date, 17, timeseries_array, current_day));
}