

var clima = {};

fetch('./js/current_clima.json')
    .then((response) => response.json())
    .then((json) => fillContent(json));


function fillContent(clima){
    var imElement = document.getElementById("weather_img");
    imElement.src = clima.current.condition.icon;

    var temperaturaEl = document.getElementById("temperatura");
    temperaturaEl.textContent = clima.current.temp_c + " ºC";

    var vientoEl = document.getElementById("viento");
    vientoEl.textContent = clima.current.temp_c + " Kph";

    var precipEl = document.getElementById("precip");
    precipEl.textContent = clima.current.precip_in + " %";

    var hours = clima.forecast.forecastday[0].hour;
    hours.forEach(function(item) {
    
        if(item.time.includes("00:00")){
            //show weather at 00:00
            var temperaturaEl00 = document.getElementById("temp_00");
            temperaturaEl00.textContent = item.temp_c + " ºC";

        }
        if(item.time.includes("08:00")){
            //show weather at 00:00
            var temperaturaEl08 = document.getElementById("temp_08");
            temperaturaEl08.textContent = item.temp_c + " ºC";
        }
        if(item.time.includes("12:00")){
            //show weather at 00:00
            var temperaturaEl12 = document.getElementById("temp_12");
            temperaturaEl12.textContent = item.temp_c + " ºC";
        }
        if(item.time.includes("18:00")){
            //show weather at 00:00
            var temperaturaEl18 = document.getElementById("temp_18");
            temperaturaEl18.textContent = item.temp_c + " ºC";
        }
    })
}