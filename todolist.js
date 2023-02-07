const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!");
}

const toDoEntryBox = document.getElementById("todo-entry-box");
const toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    const toDoItem = document.createElement("li");
    const toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDo() {
    const itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    const completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    const toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

const myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

const toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function saveList() {
    const toDos = [];

    for (let i = 0; i < toDoList.children.length; i++) {
        const toDo = toDoList.children.item(i);

        const toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log("masuk kesini ya")
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        const toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();