import {taskDate,
    taskTitle,
    taskDesc,
    taskProject,
    taskPriority,
    addButton,
    tasks
} from './domObjects.js'

import {genGridFunction} from './listOfTasks.js'





let taskFactory = function(date, title, description,project,priority){
    return {date, title, description,project,priority}
}

let faketask = taskFactory('01/01/2025','Birthday',' tingz','today','1')
let faketask2 = taskFactory('01/01/2022','Party','run thingz','tomorrow','2')
tasks.push(faketask,faketask2)


let addTask = (function(){
    addButton.addEventListener('click',function(ev){
        ev.preventDefault();
        let tempTask = taskFactory(taskDate.value,
                            taskTitle.value,
                            taskDesc.value,
                            taskProject.value,
                            taskPriority.value)
                            
        tasks.push(tempTask)
        console.log((tasks))
        document.forms[1].reset();
        genGridFunction()
    
    })  
})()

export {addTask,tasks}