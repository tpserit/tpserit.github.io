const date = new Date()
    var current_hour = date.getHours();
    var current_day = date.getDay();
    var current_month = date.getMonth()+1;
    var current_year = date.getYear()+1900;

    const day1 = current_day;
    const day2 = day1 + 1;
    const day3 = day2 + 1;


function FormatDateTime(string) {
    const time = string;
    const string_split = time.split('T');
    const date_format = string_split[0].split("-");
    const time_format = string_split[1].split(":");
    
    const formatted_date = (date_format[2] + "." + date_format[1] + "." + date_format[0]);
    const formatted_time = (time_format[0] + ":" + time_format[1]);
    const formatted_date_time = (formatted_date + " " + formatted_time);
    return formatted_date_time;
}

function ToggleAccordion(i) {
  accordion = document.getElementsByClassName("accordion")[i];
  accordion.classList.toggle("active");
  panel = accordion.nextElementSibling;

  if (panel.style.display == "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}