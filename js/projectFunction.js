import { addProjectButton,projectTitle,listOfProjects,taskProject} from './domObjects.js'
import {genKey} from './genKey.js'
import {deleteButtonProjectFunction} from './deleteButton.js'
import {releaseStorage} from './localStorageFunc.js'
import * as listOfTasks from './listOfTasks.js'



let generateListOfProjects = (function(){
    let projects = []
    if (localStorage.getItem('projects') == null){
        return projects
    }else {
        projects.push(...JSON.parse(localStorage.getItem('projects')))
        return projects 
    }
})();


let projectFactory = function(id, projectName){
    return {id, projectName}
}


//IIFe function that gather and create the object of Project and push it to list.


let addProject = (function(){
    addProjectButton.addEventListener('click',function(ev){
        ev.preventDefault();
        let tempProject = projectFactory(genKey(),projectTitle.value)
        generateListOfProjects.push(tempProject)

        document.forms[0].reset();
        releaseStorage('projects',generateListOfProjects)
        listOfTasks.genGridFunction
        projectsRefresh()
 


    })


})();

// function that populate form New Task to choose an project in dropdown.
let projectsRefresh = function(){
    taskProject.innerHTML =''
    listOfProjects.innerHTML =''


    let localStorageProjects = localStorage.getItem('projects')
    localStorageProjects = JSON.parse(localStorageProjects)


    if (localStorageProjects==null ){
        console.log("empty LS")
    } else{

    

        for (let i=0;i<localStorageProjects.length;i++){
            // populate the dropdown
            let newOption = document.createElement('option')
            newOption.innerHTML = localStorageProjects[i].projectName
            taskProject.appendChild(newOption)
    

            //populate the leftbar
            let newListItem = document.createElement('div')
            let projectContainter = document.createElement('div')
            let projectDelButton = document.createElement('button')
            projectDelButton.className = 'del-project-but'
            projectDelButton.innerHTML = 'x'

            projectContainter.dataset.name = localStorageProjects[i].id
            projectDelButton.dataset.name = localStorageProjects[i].id

            newListItem.innerHTML = localStorageProjects[i].projectName
            projectContainter.appendChild(newListItem)
            projectContainter.appendChild(projectDelButton)
            listOfProjects.appendChild(projectContainter)

            deleteButtonProjectFunction()

        }
    }
}
projectsRefresh()

export {generateListOfProjects, projectsRefresh}