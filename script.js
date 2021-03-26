//select Element

let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul')

// functions
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label)

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value)
    todoUl.appendChild(listItem)
    newTask.value = '';

    //Bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode;

    let deleteItem = document.createElement('button');
    deleteItem.innerText = "Delete";
    deleteItem.className = "delete";
    listItem.appendChild(deleteItem)

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem)

    bindCompleteItems(listItem, deleteTask);

}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem)
}

let bindInCompleteItems = function(taskItem, checkboxclick){
    let checkbox = taskItem.querySelector('input[type="checkbox"]')
    checkbox.onchange = checkboxclick;
}
let bindCompleteItems = function(taskItem, deleteBtnClick){
    let deleteBtn = taskItem.querySelector('.delete')
    deleteBtn.onclick = deleteBtnClick;
}
for(let i = 0; i<todoUl.children.length; i++){
    bindInCompleteItems(todoUl.children[i],completeTask )
}

for(let i = 0; i<completeUl.children.length; i++){
    bindCompleteItems(completeUl.children[i], deleteTask )
}

form.addEventListener('submit' , addTask)



