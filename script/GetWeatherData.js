function GetWeatherData(day, timeseries_array) {
    for (index in timeseries_array) {
      if ((timeseries_array[index].time.substring(8, 10) == day) & (timeseries_array[index].time.substring(11, 13) == current_hour)) {
        const time = FormatDateTime(timeseries_array[index].time);
        const air_temperature = Math.round(timeseries_array[index].data.instant.details.air_temperature);
        const wind_speed = Math.round(timeseries_array[index].data.instant.details.wind_speed);
  
        const wind_direction = timeseries_array[index].data.instant.details.wind_from_direction;
  
        const symbol_code = timeseries_array[index].data.next_1_hours.summary.symbol_code;
        const symbol_icon = GetWeatherSymbol(symbol_code);
  
        return {'time' : time,
                'air_temperature' : air_temperature,
                'wind_speed' : wind_speed,
                'wind_direction' : wind_direction,
                'symbol_icon' : symbol_icon
              };
      }
    }
  }