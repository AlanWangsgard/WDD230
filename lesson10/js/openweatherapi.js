const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cf760d9c35a1be97e28ef21af8e50b2e"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById("humidity").textContent = jsObject.main.humidity
        document.getElementById("condition").textContent = jsObject.weather[0].main
        document.getElementById("speed").textContent = jsObject.wind.speed
    });

const fiveURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=cf760d9c35a1be97e28ef21af8e50b2e"

fetch(fiveURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let i = 1
        for (let time in jsObject.list) {
            if (jsObject.list[time].dt_txt.includes("18:00:00")) {
                let place = "fore_" + String(i);
                let im_place = "fore_im_" + String(i);
                document.getElementById(place).textContent = Math.round(jsObject.list[time].main.temp) + "℉";
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[time].weather[0].icon + '.png'; // note the concatenation
                const desc = jsObject.list[time].weather[0].description; // note how we reference the weather array
                document.getElementById(im_place).setAttribute("src", imagesrc)
                document.getElementById(im_place).setAttribute("alt", desc)
                i++;
            }
        }
    });