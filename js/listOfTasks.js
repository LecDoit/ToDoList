import * as projectFunction from './projectFunction.js'
import * as taskFunction from './taskFunction.js'
import * as domObj from './domObjects.js'
import { genKey } from './genKey.js'
import * as deleteFunc from './deleteButton.js'




//function that generated the grid of items 

let genGridFunction = function(){
    domObj.mainList.innerHTML = ''
    for (let i=0; i<projectFunction.projects.length; i++){

        let projectContainter = document.createElement('div')
        projectContainter.innerHTML = ('Project: ') + (projectFunction.projects[i].projectName)
        domObj.mainList.appendChild(projectContainter)

        for (let j = 0; j<taskFunction.tasks.length; j++){
            if (projectFunction.projects[i].projectName == taskFunction.tasks[j].project){

                let taskContainter = document.createElement('div')
                let dateContainter = document.createElement('div')
                let titleContainter = document.createElement('div')
                let descriptionContainter = document.createElement('div')
                let priorityContainter = document.createElement('div')
                let taskDelButton = document.createElement('button')
                
                taskDelButton.textContent = 'x'
                taskDelButton.setAttribute('class','del-but')
                

                dateContainter.innerHTML = ('Due Date: ') + (taskFunction.tasks[j].date)
                titleContainter.innerHTML = ("Task: ")+(taskFunction.tasks[j].title)
                priorityContainter.innerHTML = ("Priority: ")+(taskFunction.tasks[j].priority)
                descriptionContainter.innerHTML = ("Description: ")+(taskFunction.tasks[j].description)

                taskContainter.appendChild(dateContainter)
                taskContainter.appendChild(titleContainter)
                taskContainter.appendChild(priorityContainter)
                taskContainter.appendChild(descriptionContainter)

                taskDelButton.dataset.name = taskFunction.tasks[j].id
                taskContainter.dataset.name = taskFunction.tasks[j].id
                taskContainter.appendChild(taskDelButton)

                projectContainter.appendChild(taskContainter)
                deleteFunc.deleteButtonTaskFunction()
                
            }
        }
    }

}
genGridFunction()




export{genGridFunction}