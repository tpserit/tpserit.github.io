function GetAverageWeatherData() {
    function AverageAirTemp(day, start_time, timeseries_array) {
        const air_temp_array = [];
      
        for (index in timeseries_array) {
          const index_time = (timeseries_array[index].time).substring(11,13);
          if (timeseries_array[index].time.substring(8, 10) == day && (index_time > start_time)) {
            air_temp_array.push(timeseries_array[index].data.instant.details.air_temperature);
          }
        }
      
        const avg_air_temp = air_temp_array.reduce((a, b) => a + b, 0) / (air_temp_array.length);
        return avg_air_temp;
      }
      
      
      
      function AverageWindSpeed(day, start_time, timeseries_array) {
        const wind_speed_array = [];
          
          for (index in timeseries_array) {
            const index_time = (timeseries_array[index].time).substring(11,13);
              if (timeseries_array[index].time.substring(8, 10) == day && (index_time > start_time)) {
                  wind_speed_array.push(timeseries_array[index].data.instant.details.wind_speed);
              }
          }
      
          const avg_wind_speed = wind_speed_array.reduce((a, b) => a + b, 0) / (wind_speed_array.length);
        return avg_wind_speed;
      }
      
      
      
      function AverageWindDirection(day, start_time, timeseries_array) {
        const wind_direction_array = [];
          
          for (index in timeseries_array) {
            const index_time = (timeseries_array[index].time).substring(11,13);
              if (timeseries_array[index].time.substring(8, 10) == day && (index_time > start_time)) {
                  wind_direction_array.push(timeseries_array[index].data.instant.details.wind_from_direction);
              }
          }
      
          const avg_wind_direction = wind_direction_array.reduce((a, b) => a + b, 0) / (wind_direction_array.length);
        return avg_wind_direction;
      }
      
      
      
      function AverageSymbolIcon(day, start_time, timeseries_array, current_day) {
        const symbol_code_array = [];
        for (index in timeseries_array) {
            const index_time = (timeseries_array[index].time).substring(11,13);
            if (timeseries_array[index].time.substring(8, 10) == (current_day +2) && (index_time > start_time)) {
                symbol_code_array.push(timeseries_array[index].data.next_6_hours.summary.symbol_code);
          } else if (timeseries_array[index].time.substring(8, 10) == day && (index_time > start_time)) {
            symbol_code_array.push(timeseries_array[index].data.next_1_hours.summary.symbol_code);
        }
      
        // COUNT OCCURRENCE OF ELEMENTS IN SYMBOL CODE ARRAY
        elem_count = {};
      
        for (const entry of symbol_code_array) {
            if (elem_count[entry]) {
                elem_count[entry] += 1;
            } else {
                elem_count[entry] = 1;
            }
        }
      
        var highest_count = 0;
        var highest_count_elem = "";
        for (symbol_code in elem_count) {
            if (elem_count[symbol_code] > highest_count) {
                // return (highest_count = elem_count[symbol_code]) && (highest_count_elem = symbol_code);
                highest_count = elem_count[symbol_code];
                highest_count_elem = symbol_code;
                return GetWeatherSymbol(highest_count_elem);
            }
        }
      }
    }
      GetAverageWeatherData.AverageAirTemp = AverageAirTemp;
      GetAverageWeatherData.AverageWindSpeed = AverageWindSpeed;
      GetAverageWeatherData.AverageWindDirection = AverageWindDirection;
      GetAverageWeatherData.AverageSymbolIcon = AverageSymbolIcon;

}

GetAverageWeatherData();