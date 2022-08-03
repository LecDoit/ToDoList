import * as taskFunction from './taskFunction.js'
import * as projectFunction from './projectFunction.js'
import * as listOfTasks from './listOfTasks.js'
import {releaseStorage} from './localStorageFunc.js'


let deleteButtonTaskFunction = function(){
    let delTaskBut = document.querySelectorAll('.del-but')
    
    delTaskBut.forEach(function(x){

        let localStorageTasks = localStorage.getItem('tasks')
        localStorageTasks = JSON.parse(localStorageTasks)


        x.addEventListener('click',function(){

            let datasetForX = x.dataset.name
            let index = localStorageTasks.findIndex(function(o){
                return o.id ==datasetForX
             
            })
            if (index !== -1){
                localStorageTasks.splice(index,1);
                releaseStorage("tasks", localStorageTasks)
                listOfTasks.genGridFunction()
            } else{

            }
        })
    })
};

let deleteButtonProjectFunction = function(){
    let delProjectBut = document.querySelectorAll('.del-project-but')

    delProjectBut.forEach(function(y){
        
        let localStorageProjects = localStorage.getItem('projects')
        localStorageProjects = JSON.parse(localStorageProjects)

        y.addEventListener('click',function(){
            let datasetforY = y.dataset.name
            let indey = localStorageProjects.findIndex(function(o){
                return o.id == datasetforY
            })

            if (indey !== -1){
                localStorageProjects.splice(indey,1)
                releaseStorage("projects", localStorageProjects)
                projectFunction.projectsRefresh()
                listOfTasks.genGridFunction()
            }else{

                
            }

        })



    })
    
}


export{deleteButtonTaskFunction, deleteButtonProjectFunction}