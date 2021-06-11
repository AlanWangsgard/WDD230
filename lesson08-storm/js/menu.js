function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
};

function show_active() {
    var identity = document.querySelector("body").id;
    document.getElementsByClassName(identity)[0].classList.toggle("active")
};

function date() {
    var d = new Date()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var full_date = day[d.getDay()] + ", " + " " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
    var year = new Date().getFullYear();
    var copy = document.querySelector(".copyright").innerHTML;
    document.querySelector(".copyright").innerHTML = "© " + year + copy;
    document.querySelector(".date").innerHTML = full_date;

    let body = document.querySelector("body");
    let banner = document.createElement("div");
    banner.className = "banner"
    let content = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
    let para = document.createElement("p")
    para.textContent = content
    banner.appendChild(para)
    current_day = (day[d.getDay()])
    if (current_day == "Friday") {
        body.prepend(banner)
    }
}