import { addProjectButton,projectTitle,listOfProjects,taskProject} from './domObjects.js'




let projects = []
let projectFactory = function(projectName){
    return {projectName}
}

//fake item
let fake = projectFactory('today')
let fake2 = projectFactory('tomorrow')
projects.push(fake,fake2)

//IIFe function that gather and create the object of Project and push it to list.

let addProject = (function(){
    addProjectButton.addEventListener('click',function(ev){
        ev.preventDefault();
        let tempProject = projectFactory(projectTitle.value)
        projects.push(tempProject)
        console.log(projects)
        document.forms[0].reset();
        projectsRefresh()

    })

})();

// function that populate form New Task to choose an project in dropdown.
let projectsRefresh = function(){
    taskProject.innerHTML =''
    listOfProjects.innerHTML =''
    for (let i=0;i<projects.length;i++){
        // populate the dropdown
        let newOption = document.createElement('option')
        newOption.innerHTML = projects[i].projectName
        taskProject.appendChild(newOption)
 

        //populate the leftbar
        let newListItem = document.createElement('div')
        newListItem.innerHTML = projects[i].projectName
        listOfProjects.appendChild(newListItem)

    }
}
projectsRefresh()

export {projects}