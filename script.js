let myToDoList = [];
let showDones = true;

function toggleDones() {
    if (showDones === true) {
    document.querySelector("#doneItems").style.display = "none";
    // showDones = false;
}
if (showDones === false) {
    document.querySelector("#doneItems").style.display = "block";
    // showDones = true;
} 
showDones = !showDones
console.log(showDones)
}

function resetList() {
    myToDoList = [];
    updateToDoList();
}

function markAsUndone(id) {
    for (let i = 0; i < myToDoList.length; i++) {
    if (myToDoList[i].id === id) {
        myToDoList[i].isDone = false;
    }
    }
    updateToDoList();
}

function markAsDone(id) {
    for (let i = 0; i < myToDoList.length; i++) {
    if (myToDoList[i].id === id) {
        myToDoList[i].isDone = true;
    }
    }
    updateToDoList();
}

function updateToDoList() {
    let toDoElement = document.querySelector("#toDoItems");
    let doneElement = document.querySelector("#doneItems");

    let toDoListHtml = "";
    let doneListHtml = "";

    for (let i = 0; i < myToDoList.length; i++) {
        if (myToDoList[i].isDone === false) {
            toDoListHtml +=
            "<p><input type='checkbox' onclick='markAsDone(" + myToDoList[i].id + ")'> "
            + myToDoList[i].toDoText +
            "</p>";
        }
        else {
            doneListHtml += "<p><input type='checkbox' onclick='markAsUndone(" + myToDoList[i].id + ")'checked> "
            + myToDoList[i].toDoText +
            "</p>";
        }
    }
    toDoElement.innerHTML = toDoListHtml;
    doneElement.innerHTML = doneListHtml;
}

function addItem() {
    let inputText = document.querySelector("#addItemInput").value;
    console.log(inputText);
    if (inputText) {
        let toDoItem = {
            toDoText: inputText, 
            isDone: false,
            id: myToDoList.length
        }
        myToDoList.push(toDoItem);
    }
    document.querySelector("#addItemInput").value = ""
    updateToDoList();
}