const ads = "json/ammon.json"

fetch(ads)
    .then((response) => response.json())
    .then((jsObject) => {
        const data = jsObject["companies"]
        console.log(data)
        for (let i in data) {
            let name = data[i].name
            let logo = data[i].logo
            let phone = data[i].phone
            let address = data[i].address
            let weblink = data[i].weblink
            let div = document.createElement("div")
            div.setAttribute("class", "direct")
            console.log(name, logo, phone, address, weblink)
            let h3 = document.createElement("h3")
            h3.textContent = name
            let img = document.createElement("img")
            img.setAttribute("src", "images/" + logo)
            img.setAttribute("alt", logo)
            let p = document.createElement("p")
            let p2 = document.createElement("p")
            let a = document.createElement("a")
            p.textContent = address
            p2.textContent = phone
            a.setAttribute("href", weblink)
            a.textContent = name + " Webpage"
            let main = document.querySelector(".contain")
            div.appendChild(h3)
            div.appendChild(img)
            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(a)
            main.appendChild(div)
        }
    })

function listview() {
    for (let i = 0; i < 7; i++) {
        let thing = document.querySelector(".direct")
        thing.classList.toggle("direct")
        thing.classList.toggle("list")
    }

}

function gridview() {
    for (let i = 0; i < 7; i++) {
        let thing = document.querySelector(".list")
        thing.classList.toggle("direct")
        thing.classList.toggle("list")
    }
}