const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.46&lon=-111.96&units=imperial&exclude=hourly,minutely&appid=cf760d9c35a1be97e28ef21af8e50b2e"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let date = new Date()
        let day = date.getDay()
        let temp = jsObject.daily[0].temp.day
        document.querySelector(".temp").textContent = Math.round(temp) + "°"

        let current = jsObject.daily[0].weather[0].main
        document.querySelector(".current").textContent = current

        let humid = jsObject.daily[0].humidity
        document.querySelector(".humidity").textContent = humid + "%"

        let dayofweek = days[day]
        document.querySelector(".day-o-w").textContent = dayofweek

        let i = day + 1
        for (let n = 1; n <= 3; n++) {
            let weekday = days[i]
            if (i == 6) {
                i = 0
            }
            i++
            let tempr = jsObject.daily[n].temp.day
            let place = ".forc-" + String(n)
            let h3 = document.createElement("h3")
            let p = document.createElement("p")
            h3.textContent = weekday
            p.textContent = Math.round(tempr) + "°"
            document.querySelector(place).appendChild(h3)
            document.querySelector(place).appendChild(p)
        }
        let alerts = jsObject.alerts
        for (let alr in alerts) {
            console.log(alerts[alr].event, alerts[alr].description)
            let body = document.querySelector("body")
            let h3 = document.createElement("h3")
            let button = document.createElement("button")
            let div = document.createElement("div")
            button.textContent = "❌"
            button.setAttribute("onclick", "removealert()")
            h3.textContent = alerts[alr].event
            div.setAttribute("class", "alert")
            div.appendChild(h3)
            div.appendChild(button)
            body.prepend(div)
        }
    });

function removealert() {
    let body = document.querySelector("body")
    body.removeChild(body.childNodes[0])
}