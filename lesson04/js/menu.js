function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}

function date() {
    var d = new Date()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var full_date = day[d.getDay()] + ", " + " " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear()
    var year = new Date().getFullYear();
    var copy = document.querySelector(".copyright").innerHTML;
    document.querySelector(".copyright").innerHTML = "© " + year + copy;
    document.querySelector(".date").innerHTML = full_date;
}