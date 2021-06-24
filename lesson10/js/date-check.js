if (!localStorage.getItem("last_visit")) {
    add_last()
    display_days("It looks like this is your first time on the site! Welocme and come again!")
} else {
    var last = localStorage.getItem("last_visit")
    var dt1 = new Date()
    var day = dt1.getDate()
    var month = dt1.getMonth() + 1
    var year = dt1.getFullYear()
    var current = new Date(month + "/" + day + "/" + year)
    last = new Date(last)
    total = ((current.getTime() - last.getTime()) / (1000 * 3600 * 24))
    var message = ""
    if (total == 0) {
        message = "Looks like you couldn't stay away for more than a day! 0 since last visit"
    } else if (total == 1) {
        message = "It's only been 1 day since your last visit, Welcome back!"
    } else if (total > 1) {
        message = "It has been " + total + " days since your last visit, Welcome back!"
    }
    add_last()
    display_days(message)
}

function add_last() {
    var dt1 = new Date()
    var day = dt1.getDate()
    var month = dt1.getMonth() + 1
    var year = dt1.getFullYear()
    var current = new Date(month + "/" + day + "/" + year)
    localStorage.setItem("last_visit", current)
}

function display_days(message) {
    document.querySelector(".visit").textContent = message
}