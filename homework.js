const body = document.body

body.style.backgroundColor = 'black'
body.style.color = 'white'

const toDoListForm = document.querySelector('#to-do-form')
const toDoListContainer = document.querySelector('#to-do-list-container')
toDoListContainer.style.dsiplay = 'flex'
const toDoList = document.createElement('div')
const toDoListHeading = document.createElement('h3')
const listOfTasks = document.createElement('ul')

toDoListForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const toDoListItem = getToDoListItem()
    console.log(toDoListItem)
    makeToDoList(toDoListItem)
})

function getToDoListItem() {
    return document.querySelector('#to-do-list-input').value
}



function makeToDoList(taskData) {
    const tasks = taskData.split(',')

    for (const task of tasks) {
        const individualTask = document.createElement('li')
        individualTask.innerText = task.trim()
        listOfTasks.appendChild(individualTask)


        individualTask.addEventListener('click', (e) => {
            if (individualTask.innerText.endsWith(' completed')) {
                e.target.remove()
            } else {
                individualTask.innerText += ` completed`
                individualTask.style.color = 'green'
            }
        })
    }
    


    toDoList.append(toDoListHeading, listOfTasks)
    toDoListHeading.innerText = 'To Do List'

    toDoListContainer.appendChild(toDoList)

    individualTask.addEventListener('click', (e) => {
        e.target.remove()
    })
}

// const test=document.querySelector('#to-do-list-input')
// console.log(test)