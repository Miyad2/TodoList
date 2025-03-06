const todoContainer = document.querySelector('.todo-container');
const form = document.querySelector('form');
const formInput = document.querySelector('#todo-input');


form.addEventListener('submit', (event) => {
    event.preventDefault()
    var inputValue = formInput.value
    formInput.value = ""

    // Check empty Value
    if (inputValue === "") {
        alert("Please write something...")
    } else {
        todoLayout(inputValue)
    }
    
});

// Add Layout
function todoLayout(inputValue) {
    var todoList = document.createElement("div")
    todoList.classList.add("todo-list")
    todoList.innerHTML = ""
    todoList.innerHTML = `<div class="todo-item">
                            <div class="todo-left todo-display">
                            <div class="item-bar-icon icon-color"><i class="fa-solid fa-bars"></i></div>
                            <div class="item-text"><p>${inputValue}</p></div>
                            </div>
                            <div class="todo-right todo-display">
                            <div class="item-check-icon icon-color"><i class="fa-solid fa-check"></i></div>
                            <div class="item-delete-icon icon-color"><i class="fa-solid fa-trash"></i></div>
                            </div>
                        </div>`
    todoContainer.appendChild(todoList)
    // check Btn click event
    clickCheck(todoList)
    deleteList(todoList)

}

// check Btn click event function
function clickCheck(event) {
    event.querySelector(".item-check-icon").addEventListener("click", () => {
        const checkIcon = event.querySelector('.item-check-icon');
        checkIcon.innerHTML = "Done"
        // Add Style
        checkIcon.setAttribute("style", "background:transparent; color:#000; cursor:auto")
        event.querySelector(".item-text p").setAttribute("style", "    text-decoration: line-through; color: #aaa9a9;")
        event.querySelector(".item-bar-icon").setAttribute("style", "    background:#ff0505f7")
        event.querySelector(".item-delete-icon").setAttribute("style", "    background:#ff0505f7")

    })
   
}
// check Btn click event function
function deleteList(event) {
    event.querySelector(".item-delete-icon").addEventListener("click", () => {
        event.remove()
    })
     
}




