import * as taskFunction from './taskFunction.js'
import * as projectFunction from './projectFunction.js'
import * as listOfTasks from './listOfTasks.js'

let deleteButtonTaskFunction = function(){
    let delTaskBut = document.querySelectorAll('.del-but')
    
    delTaskBut.forEach(function(x){
        x.addEventListener('click',function(){
            let datasetForX = x.dataset.name
            let index = taskFunction.tasks.findIndex(function(o){
                return o.id ==datasetForX
                
            })
            if (index !== -1){
                taskFunction.tasks.splice(index,1);

                listOfTasks.genGridFunction()
            } else{
                console.log('wrong!')
            }

        })
        
    })

};


let deleteButtonProjectFunction = function(){
    let delProjectBut = document.querySelectorAll('.del-project-but')

    delProjectBut.forEach(function(y){
        y.addEventListener('click',function(){
            let datasetforY = y.dataset.name
            let indey = projectFunction.projects.findIndex(function(o){
                return o.id == datasetforY
            })
            console.log(indey)

            if (indey !== -1){
                projectFunction.projects.splice(indey,1);
                projectFunction.projectsRefresh()
                listOfTasks.genGridFunction()
    
            }else{
                console.log("wrong!")
            }

        })



    })
    
}


export{deleteButtonTaskFunction, deleteButtonProjectFunction}