
let title = document.getElementById("title");

let message = document.getElementById("message"); 

title.focus()

let plus = document.getElementById("plus");

let counter = 0;
// this counter is to use in editable
window.addEventListener("load", () => {
    counter = 0;
}) 



plus.addEventListener("click", () => {

    let title_value = title.value;
    let message_value = message.value;

    if (!title_value) {
    
        title.focus();
        alert("Please enter a value for title!!!")
        // return;
    }

    if (title_value) {
        title_value = title_value[0].toUpperCase() + ("" || title_value.slice(1));
    } else {
        return;
    }


    if (message_value) {
        message_value = message_value[0].toUpperCase() + message_value.slice(1);
    }


///  create task:

let tasks = document.getElementById("tasks");

let task = document.createElement("div");
task.classList.add("task");



let task_title = document.createElement("div");
task_title.classList.add("task-title");


let title_p = document.createElement("p");
title_p.classList.add("task-p");
title_p.innerText = `${title_value}`;


let message_p = document.createElement("p");
message_p.classList.add("task-p");
message_p.innerText = `${message_value}`;


let task_control = document.createElement("div");
task_control.classList.add("task-control");

    // check add
let check = document.createElement('i');
check.innerHTML = '<i class="fa-solid fa-square-check check"></i>';
check.classList.add("check");

/// buton üzerine maus getirince bilgi kutucugu cikmasi
check.setAttribute("title", "Click to Done");

    ///  add funcion to check button  
check.addEventListener("click", (e) => {
    let parentElement = e.currentTarget.offsetParent;
    parentElement.classList.toggle("done");
    // console.log(e);
});



    // edit add:
let edit = document.createElement("i");
edit.innerHTML = '<i class="fa-solid fa-pen-to-square edit"></i>';
edit.classList.add("edit");

edit.setAttribute("title", "Click to Edit");


    // add function to edit button:

    edit.addEventListener("click", (e) => {

    let parentElement = e.currentTarget.offsetParent;
    let title = parentElement.children[0].children[0];
    // console.log(title);
    let message = parentElement.children[1].children[0];
    // console.log(message);

    
    // HTML icindeki contentaditable attribute yakalama
    // console.log(title.attributes[1]);


    if (counter % 2 == 0) {
        title.setAttribute("contenteditable", "true");
        message.setAttribute("contenteditable", "true");
    }   else {
        title.setAttribute("contenteditable", "false");
        message.setAttribute("contenteditable", "false");
    }
    counter += 1;

})

    // delete add:
let delete_ = document.createElement("i");
delete_.classList.add("delete");
delete_.innerHTML = '<i class="fa-solid fa-trash-can delete"></i>';
delete_.setAttribute("title", "Delete this Task");
    //  append delete edit check
task_control.appendChild(check);
task_control.appendChild(edit);
task_control.appendChild(delete_);

    /// add function to delete button

    delete_.addEventListener("click", (e) => {
        let parentElement = e.currentTarget.offsetParent;
        parentElement.remove();
    })


let task_message = document.createElement("div");
task_message.classList.add("task-message");

//// append divs

task_title.appendChild(title_p);
task_title.appendChild(task_control);

task_message.appendChild(message_p);
    


task.appendChild(task_title);

task.appendChild(task_message);

tasks.appendChild(task);


    title_value = "";
    message_value = "";


title.value = "";
message.value = "";
title.focus();
});

    // bunlar func icinde tanimlandigi icin burada tanimlamak istersek  undefined oluyor

// let check = document.createElement('i');
// check.innerHTML = '<i class="fa-solid fa-square-check check"></i>';
// check.classList.add("check");


document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
        plus.click()
    }
})


























