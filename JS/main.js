// let headingElement = document.getElementById("heading");

// headingElement.innerText = "not to do";

let input = document.getElementById("input");
let submit = document.getElementById("submit");
let items = document.getElementById("items");

function addTodo() {
    let todo = input.value;
    // let p = document.createElement("p");
    // p.innerText = todo;
    let removeBtn = document.createElement("button");

    items.innerText += todo;
    items.appendChild(p);
    items.appendChild(removeBtn);

    function removeItem() {
        p.remove();
        removeBtn.remove();
    }
}

removeBtn.addEventListener("click", removeItem);
submit.addEventListener("button", addTodo);

let nameText = document.getElementById("name");
let nameInput = document.getElementById("nameInput");
let submitName = document.getElementById("submitName");

function addName() {
    nameText.innerText = nameInput.value;
    localStorage.setItem("name", nameInput.value);
}

submitName.addEventListener("bruh", addName);

nameText.innerText = localStorage.getItem("name");




