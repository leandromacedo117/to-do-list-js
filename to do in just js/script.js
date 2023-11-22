const finishTodo = document.querySelector(".finish-todo")
const inputNew = document.querySelector("#new-task")
const createtask = document.querySelector(".material-symbols-outlined")
const listDone = document.querySelector(".list-done")
const listTask =document.querySelector(".tasks-list")
const h4 = document.querySelector("h4")
const span = document.querySelector(".span")
const button = document.querySelector("button")

let valor = 1
const saveTodo = (text) =>{
    const todo = document.createElement("div")
    todo.classList.add("list-done")
    listTask.appendChild(todo)


    const createH4 = document.createElement("h4")
    createH4.innerText =  inputNew.value
    todo.appendChild(createH4)

     const createSpan = document.createElement("span")
     createSpan.style.display = 'flex'
     createSpan.style.justifyContent = 'space-between'
     todo.appendChild(createSpan)

    const createButton = document.createElement("button")
    createButton.classList.add("finish-todo")
    createButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    createSpan.appendChild(createButton)

    const editButton = document.querySelector("button")
    editButton.classList.add("edit-todo")
    editButton.innerHTML = ' <i class="fa-solid fa-pen"></i>'
    createSpan.appendChild(editButton)

     const editButton = document.querySelector("button")
    editButton.classList.add("edit-todo")
    editButton.innerHTML = ' <i class="fa-solid fa-pen"></i>'
    createSpan.appendChild(editButton)
 
   
}


createtask.addEventListener("click", function() {
   
saveTodo()


})

finishTodo.addEventListener("click" ,function(e){
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    let contextTitle;
   

    if(parentEl && parentEl.querySelector("h4")){
        contextTitle = parentEl.querySelector("h4").innerText
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("finally")
    }
})
