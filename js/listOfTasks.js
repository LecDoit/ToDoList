import * as projectFunction from './projectFunction.js'
import * as taskFunction from './taskFunction.js'
import * as domObj from './domObjects.js'
import { genKey } from './genKey.js'
import * as deleteFunc from './deleteButton.js'
import * as openWindows from './openNewTaskWindowFunction.js'
import {releaseStorage} from './localStorageFunc.js'




//function that generated the grid of items 

let genGridFunction = function(){
    domObj.mainList.innerHTML = ''
    // console.log(localStorage.getItem('tasks'))
    let localStorageTasks = localStorage.getItem('tasks')
    localStorageTasks = JSON.parse(localStorageTasks)
    console.log(localStorageTasks)

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
                let taskDetailsContainter = document.createElement('div')
                
                taskDelButton.textContent = 'x'
                taskDelButton.setAttribute('class','del-but')
                taskDetailsContainter.classList.add('start')
                titleContainter.classList.add('accordion__button')
                

                dateContainter.innerHTML = ('Due Date: ') + (taskFunction.tasks[j].date)
                titleContainter.innerHTML = ("Task: ")+(taskFunction.tasks[j].title)
                priorityContainter.innerHTML = ("Priority: ")+(taskFunction.tasks[j].priority)
                descriptionContainter.innerHTML = ("Description: ")+(taskFunction.tasks[j].description)

                taskDetailsContainter.appendChild(dateContainter)
                taskContainter.appendChild(titleContainter)
                taskDetailsContainter.appendChild(priorityContainter)
                taskDetailsContainter.appendChild(descriptionContainter)
                taskContainter.appendChild(taskDetailsContainter)

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


let accordionFunc = function(){

    document.querySelectorAll('.accordion__button').forEach(function(containter){
        containter.addEventListener('click',function(){
            let accordionContent = containter.nextElementSibling;
            accordionContent.classList.toggle('aktyw')
            if (accordionContent.classList.contains('start aktyw')){
                accordionContent.getElementsByClassName.maxHeight = accordionContent.scrollHeight + 'px';
    
            } else{

                accordionContent.getElementsByClassName.maxHeight = 0;
            }
            
        })
    })
    };

accordionFunc()

export{genGridFunction,accordionFunc}


