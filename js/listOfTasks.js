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

    let localStorageTasks = localStorage.getItem('tasks')
    localStorageTasks = JSON.parse(localStorageTasks)

    let localStorageProjects = localStorage.getItem('projects')
    localStorageProjects = JSON.parse(localStorageProjects)

    if (localStorageProjects==null){
        console.log("empty LS")
    } else {
        for (let i=0; i<localStorageProjects.length; i++){

            let projectContainter = document.createElement('div')
            projectContainter.innerHTML = ('Project: ') + (localStorageProjects[i].projectName)
            domObj.mainList.appendChild(projectContainter)

            if (localStorageTasks==null){

            } else {
                for (let j = 0; j<localStorageTasks.length; j++){

                    if (localStorageProjects[i].projectName == 
                        localStorageTasks[j].project){
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
                        

                        dateContainter.innerHTML = ('Due Date: ') + (localStorageTasks[j].date)
                        titleContainter.innerHTML = ("Task: ")+(localStorageTasks[j].title)
                        priorityContainter.innerHTML = ("Priority: ")+(localStorageTasks[j].priority)
                        descriptionContainter.innerHTML = ("Description: ")+(localStorageTasks[j].description)

                        taskDetailsContainter.appendChild(dateContainter)
                        taskContainter.appendChild(titleContainter)
                        taskDetailsContainter.appendChild(priorityContainter)
                        taskDetailsContainter.appendChild(descriptionContainter)
                        taskContainter.appendChild(taskDetailsContainter)

                        taskDelButton.dataset.name = localStorageTasks[j].id
                        taskContainter.dataset.name = localStorageTasks[j].id
                        taskContainter.appendChild(taskDelButton)

                        projectContainter.appendChild(taskContainter)
                        deleteFunc.deleteButtonTaskFunction()
                        
                        
                    }

                    
                }
            
                
            }
        }
    }

}


genGridFunction()


let accordionFunc = (function(){

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
    })();

accordionFunc

export{genGridFunction,accordionFunc}


