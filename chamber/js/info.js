function lastModified() {
    let date = document.lastModified
    let foot = document.querySelector("footer")
    let p = document.createElement("p")
    p.textContent = "Last modified: " + date
    foot.appendChild(p)
}

function showNav() {
    document.querySelector(".nav").classList.toggle("responsive")
}

function show_active() {
    var identity = document.querySelector("body").id;
    document.getElementsByClassName(identity)[0].classList.toggle("active")
};