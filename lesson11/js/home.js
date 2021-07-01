const data = "js/town.json"

fetch(data)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject["towns"]
        town_classes = [".preston-home", ".soda-springs-home", ".fish-haven-home"]
        town_index = [6, 0, 2]

        for (let i = 0; i < town_classes.length; i++) {
            let place = document.querySelector(town_classes[i])
            let h2 = document.createElement('h2');
            let h3 = document.createElement("h3")
            let year = document.createElement('p')
            let pop = document.createElement('p')
            let rain = document.createElement('p')
            let img = document.createElement('img')

            h2.textContent = towns[town_index[i]].name
            h3.textContent = towns[town_index[i]].motto
            year.textContent = "Year Founded: " + towns[town_index[i]].yearFounded
            pop.textContent = "Population: " + towns[town_index[i]].currentPopulation
            rain.textContent = "Annual Rain Fall: " + towns[town_index[i]].averageRainfall
            let img_path = "images/" + towns[town_index[i]].photo
            img.setAttribute("src", img_path)

            place.appendChild(h2)
            place.appendChild(h3)
            place.appendChild(year)
            place.appendChild(pop)
            place.appendChild(rain)
            place.appendChild(img)

        }
    })