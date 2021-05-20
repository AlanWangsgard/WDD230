const input = document.querySelector("#favchap");
const button = document.querySelector("button");

const list = document.querySelector(".list");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button");
    let text = input.value;
    li.textContent = text;
    deletebutton.textContent = "❌";
    list.append(li)
    li.appendChild(deletebutton)
    input.value = ""
    document.querySelector("#favchap").focus()
    deletebutton.addEventListener("click", function() {
        li.remove();
        deletebutton.remove()
        document.querySelector("#favchap").focus()
    })
});