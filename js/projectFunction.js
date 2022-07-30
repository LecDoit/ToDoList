import { addProjectButton,projectTitle,listOfProjects,taskProject} from './domObjects.js'
import {genKey} from './genKey.js'
import {deleteButtonProjectFunction} from './deleteButton.js'
import {releaseStorage} from './localStorageFunc.js'




let projects = []
let projectFactory = function(id, projectName){
    return {id, projectName}
}

//fake item
let fake = projectFactory('666','today')
let fake2 = projectFactory('999','tomorrow')
projects.push(fake,fake2)

//IIFe function that gather and create the object of Project and push it to list.

let addProject = (function(){
    addProjectButton.addEventListener('click',function(ev){
        ev.preventDefault();
        let tempProject = projectFactory(genKey(),projectTitle.value)
        projects.push(tempProject)
        console.log(projects)
        document.forms[0].reset();
        projectsRefresh()
        releaseStorage('projects',projects)

    })
    releaseStorage('projects',projects)

})();

// function that populate form New Task to choose an project in dropdown.
let projectsRefresh = function(){
    taskProject.innerHTML =''
    listOfProjects.innerHTML =''

    //plaing arround with local storage
    let localStorageProjects = localStorage.getItem('tasks')
    localStorageProjects = JSON.parse(localStorageProjects)
    console.log(localStorageProjects)


    for (let i=0;i<projects.length;i++){
        // populate the dropdown
        let newOption = document.createElement('option')
        newOption.innerHTML = projects[i].projectName
        taskProject.appendChild(newOption)
 

        //populate the leftbar
        let newListItem = document.createElement('div')
        let projectContainter = document.createElement('div')
        let projectDelButton = document.createElement('button')
        projectDelButton.className = 'del-project-but'
        projectDelButton.innerHTML = 'x'

        projectContainter.dataset.name = projects[i].id
        projectDelButton.dataset.name = projects[i].id

        newListItem.innerHTML = projects[i].projectName
        projectContainter.appendChild(newListItem)
        projectContainter.appendChild(projectDelButton)
        listOfProjects.appendChild(projectContainter)

        deleteButtonProjectFunction()

    }
}
projectsRefresh()

export {projects , projectsRefresh}