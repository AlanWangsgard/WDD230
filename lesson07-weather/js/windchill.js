function wind() {
    var temp = document.querySelector(".temp").textContent
    var speed = document.querySelector(".speed").textContent

    if (temp >= 50 && speed >= 3) {
        wind_chill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16))
        console.log(wind_chill)
        wind_chill = Math.round(wind_chill)
        wind_chill = wind_chill + "F"
    } else {
        wind_chill = "N/A"
    };

    document.querySelector(".chill").textContent = wind_chill
}