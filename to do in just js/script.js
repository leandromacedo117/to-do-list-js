const finishTodo = document.querySelector(".test")
const inputNew = document.querySelector("#new-task")
const createtask = document.querySelector(".material-symbols-outlined")
const listDone = document.querySelector(".list-done")
const listTask =document.querySelector(".tasks-list")
const h4 = document.querySelector("h4")
const span = document.querySelector(".span")
const button = document.querySelector("button")
const deletebu = document.querySelector(".delete-todo")

let valor = 1


const saveTodo = (text) =>{
    const todo = document.createElement("div")
    todo.classList.add("list-done")
    listTask.appendChild(todo)


    const createH4 = document.createElement("h4")
    createH4.innerText =  inputNew.value
    todo.appendChild(createH4)

     const createSpan = document.createElement("span")
    
     todo.appendChild(createSpan)

    const createButton = document.createElement("button")
    createButton.classList.add("finish-todo")
    createButton.innerHTML = ' <span class="material-symbols-outlined">done</span>'
    createSpan.appendChild(createButton)

    const editButton = document.createElement("button")
    editButton.classList.add("edit-todo")
    editButton.innerHTML = '<span class="material-symbols-outlined">edit</span>'
    createSpan.appendChild(editButton)
 
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-todo")
    deleteButton.innerHTML = ' <span class="material-symbols-outlined" >close </span>'
    createSpan.appendChild(deleteButton)

}


createtask.addEventListener("click", function() {
   
saveTodo()


})

document.addEventListener("click" ,function(e){
   
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    let contextTitle;
//    finally tasks
    if (parentEl && targetEl.querySelector("h4"))
    {
        contextTitle = parentEl.querySelector("h4").innerText
    } 

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("finally")
        console.log('tes')
    }
    
    // remove task
    if(targetEl.classList.contains("delete-todo")){
        parentEl.remove()
    }

    // edit task 
    if(targetEl.classList.contains("edit-todo")){
    contextTitle = parentEl.querySelector("h4").innerText
    inputNew.value = contextTitle
    parentEl.remove()
    }
})
