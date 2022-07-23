// New Task form   
let taskDate = document.getElementById('date')
let taskTitle = document.getElementById('title')
let taskDesc = document.getElementById('desc')
let taskProject = document.getElementById('project')
let taskPriority = document.getElementById('priority')
let projectTitle = document.getElementById('newProject')
let mainList = document.getElementById('list')
let openTaskWindow = document.getElementById('openTaskWindow')
let openProjectWindow = document.getElementById('openProjectWindow')
let floatingTaskWindow = document.getElementById('floating')
let floatingProjectWindow = document.getElementById('left')


// New Project form
let listOfProjects = document.getElementById('listOfProjects')

//buttons
let addButton = document.getElementById('add')
let addProjectButton = document.getElementById('addProjectButton')

//main
let mainView = document.getElementById('main')

// lists
let tasks = [];

export {
    taskDate,
    taskTitle,
    taskDesc,
    taskProject,
    taskPriority,
    addButton,
    addProjectButton,
    projectTitle,
    listOfProjects,
    mainView,
    tasks,
    mainList,
    openTaskWindow,
    floatingTaskWindow,
    floatingProjectWindow,
    openProjectWindow,
    
};