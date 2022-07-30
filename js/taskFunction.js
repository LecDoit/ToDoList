import {taskDate,
    taskTitle,
    taskDesc,
    taskProject,
    taskPriority,
    addButton,
    tasks
} from './domObjects.js'


import {genGridFunction, accordionFunc} from './listOfTasks.js'
import {genKey} from './genKey.js'
import {releaseStorage} from './localStorageFunc.js'





let taskFactory = function(id,date, title, description,project,priority){
    return {id,date, title, description,project,priority}
}

let faketask = taskFactory('123','01/01/2025','Birthday',' tingz','today','1')
let faketask2 = taskFactory('456','01/01/2022','Party','run thingz','tomorrow','2')
tasks.push(faketask,faketask2)


let addTask = (function(){
    addButton.addEventListener('click',function(ev){
        ev.preventDefault();
        let tempTask = taskFactory(
                            genKey(),
                            taskDate.value,
                            taskTitle.value,
                            taskDesc.value,
                            taskProject.value,
                            taskPriority.value)
                            
        tasks.push(tempTask)
        console.log((tasks))
        document.forms[1].reset();
        genGridFunction()
        accordionFunc()
        releaseStorage('tasks',tasks)
    
    })  
    releaseStorage('tasks',tasks)
})()

export {addTask,tasks}