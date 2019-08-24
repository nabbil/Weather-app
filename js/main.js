(function ($) {
    "use strict";




})(jQuery);



function onSubmit() {
    let name = $("#submit-form input[name=full-name]").val()
    console.log(name)
}

function dateChange() {
    let city = $("#change-form input[name=city]").val()
    let country = $("#change-form input[name=country]").val()

    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=574d1014c3e1cad3de59d581a040f66c', function (data) {
        console.log(data)
        let name = (data.name)
        // let country = (data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName)
        let temp = (data.main.temp);
        let forecast = (data.weather[0].description)
        let high = (data.main.temp_max)
        let low = (data.main.temp_min)
        let humidity = (data.main.humidity)

        // $("#City"+i.toString()).text(city + " " + country)
        // $("#Country" + i.toString()).text(country)
        $("#Name").text(name);
        $("#Temp").text(temp);
        $("#Forecast").text(forecast);
        $("#High-Low").text(high + "/" + low)
        $("#Humidity").text(humidity)



    })

}