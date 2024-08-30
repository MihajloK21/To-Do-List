const nameInput = document.querySelector(".name-input")
const urgentBtns = document.querySelectorAll(".urgency-button")
const dateInput = document.querySelector(".date-input")
const addTaskBtn = document.querySelector(".add-task-button")

const sortBtns = document.querySelectorAll(".sort-button")


const taskContainer = document.querySelector(".task-container")


let urgentBtnText
let urgentBtnStyle

urgentBtns.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('choice')

    if (button.classList.contains('choice')) {
      urgentBtnText = button.textContent
      urgentBtnStyle = button.style.background
      button.classList.remove('choice')
    }
  })
})


addTaskBtn.addEventListener('click', (e) => {

  const task = document.createElement('div')
  task.classList.add('task')


  const taskIcon = document.createElement('i')
  taskIcon.classList.add('fa-solid')
  taskIcon.classList.add('fa-x')
  taskIcon.classList.add('task-icon')

  taskIcon.addEventListener('click', () => {
    taskContainer.removeChild(task)
  })


  const taskName = document.createElement('h2')
  taskName.classList.add('task-name')
  taskName.textContent = nameInput.value


  const taskInfo = document.createElement('div')
  taskInfo.classList.add('task-info')


  const taskUrgency = document.createElement('button')
  taskUrgency.classList.add('task-urgency')
  taskUrgency.textContent = urgentBtnText

  if (taskUrgency.textContent === 'High') {
    taskUrgency.style.background = 'hsl(0, 100%, 50%)'
  }
  else if (taskUrgency.textContent === 'Mid') {
    taskUrgency.style.background = 'hsl(55, 100%, 50%)'
  }
  else if (taskUrgency.textContent === 'Low') {
    taskUrgency.style.background = 'hsl(184, 100%, 50%)'
  }

  const taskDate = document.createElement('h2')
  taskDate.classList.add('task-date')
  taskDate.textContent = dateInput.value

  
  taskInfo.append(taskUrgency, taskDate)



  const taskStatusContainer = document.createElement('div')
  taskStatusContainer.classList.add('task-status-container')


  const taskStatusHeader = document.createElement('h2')
  taskStatusHeader.classList.add('task-status-header')
  taskStatusHeader.textContent = "Select status:"


  const completeStatus = document.createElement('option')
  completeStatus.classList.add('task-status')
  completeStatus.textContent = "Completed"
  completeStatus.setAttribute.id = 'complete'

  completeStatus.addEventListener('click', () => {
    if ((inProgressStatus.classList.contains('active') || notStartedStatus.classList.contains('active'))) {
      inProgressStatus.classList.remove('active')
      notStartedStatus.classList.remove('active')
      task.classList.remove('in-progress', 'not-started')
    }

    if (completeStatus.classList.contains('active') &&  task.classList.contains('completed')) {
      task.classList.add('remove')
    }

    completeStatus.classList.add('active')
    task.classList.add('completed')

    if (task.classList.contains('remove')) {
      completeStatus.classList.remove('active')
      task.classList.remove('completed')
      task.classList.remove('remove')
    }

    
  })


  const inProgressStatus = document.createElement('option')
  inProgressStatus.classList.add('task-status')
  inProgressStatus.textContent = "In progress"
  inProgressStatus.id = 'in-progress'

  inProgressStatus.addEventListener('click', () => {

    if (completeStatus.classList.contains('active') || notStartedStatus.classList.contains('active')) {
      completeStatus.classList.remove('active')
      notStartedStatus.classList.remove('active')
      task.classList.remove('completed', 'not-started')
    }

    if (inProgressStatus.classList.contains('active') &&  task.classList.contains('in-progress')) {
      task.classList.add('remove')
    }
    
    inProgressStatus.classList.add('active')
    task.classList.add('in-progress')

    if (task.classList.contains('remove')) {
      inProgressStatus.classList.remove('active')
      task.classList.remove('in-progress')
      task.classList.remove('remove')
    }
  })


  const notStartedStatus = document.createElement('option')
  notStartedStatus.classList.add('task-status')
  notStartedStatus.textContent = "Not started"
  notStartedStatus.setAttribute.id = 'not-started'

  notStartedStatus.addEventListener('click', () => {
    if (completeStatus.classList.contains('active') || inProgressStatus.classList.contains('active')) {
      completeStatus.classList.remove('active')
      inProgressStatus.classList.remove('active')
      task.classList.remove('completed', 'in-progress')
    }

    if (notStartedStatus.classList.contains('active') &&  task.classList.contains('not-started')) {
      task.classList.add('remove')
    }

  
    
    notStartedStatus.classList.add('active')
    task.classList.add('not-started')

    if (task.classList.contains('remove')) {
      notStartedStatus.classList.remove('active')
      task.classList.remove('not-started')
      task.classList.remove('remove')
    }
  })

  

  taskStatusContainer.append(taskStatusHeader, completeStatus, inProgressStatus, notStartedStatus)

  task.append(taskIcon, taskName, taskInfo, taskStatusContainer)

  taskContainer.append(task)
})

sortBtns.forEach((button) => {
  button.addEventListener('click', () => {

    for (let i = 0; i < sortBtns.length; i++) {
      if (sortBtns[i].classList.contains('active')) {
        sortBtns[i].classList.remove('active')
      }
    }
    
    button.classList.add('active')
    showSortedTasks(button)
  })
})



function showSortedTasks(button) {

const allTasks = document.querySelectorAll(".task")

  allTasks.forEach((task) => {
    
    for (let i = 0; i < allTasks.length; i++) {
 
      if (!allTasks[i].classList.contains(button.id)) {
        allTasks[i].style.display = 'none'
      }
      else if (allTasks[i].classList.contains(button.id) && button.classList.contains('active')){
        allTasks[i].style.display = 'flex'
      }

      
      if (button.id === 'all'){
        allTasks[i].style.display = 'flex'
        console.log('fuck');
      }

    }
  
  })
}



















