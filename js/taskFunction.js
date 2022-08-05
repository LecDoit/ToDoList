import {taskDate,
    taskTitle,
    taskDesc,
    taskProject,
    taskPriority,
    addButton,

} from './domObjects.js'


import {genGridFunction, accordionFunc} from './listOfTasks.js'
import {genKey} from './genKey.js'
import {releaseStorage} from './localStorageFunc.js'



let generateListOfTasks = (function(){
    let tasks = []
    if (localStorage.getItem('tasks') == null){
        return tasks
    }else {
        tasks.push(...JSON.parse(localStorage.getItem('tasks')))
        return tasks
    }
})();


let taskFactory = function(id,date, title, description,project,priority){
    return {id,date, title, description,project,priority}
}




let addTask = (function(){
    addButton.addEventListener('click',function(ev){
        ev.preventDefault()
        let tempTask = taskFactory(
                            genKey(),
                            taskDate.value,
                            taskTitle.value,
                            taskDesc.value,
                            taskProject.value,
                            taskPriority.value)
                            
        generateListOfTasks.push(tempTask)
        console.log((generateListOfTasks))
        document.forms[1].reset();

        accordionFunc
        releaseStorage('tasks',generateListOfTasks)
        genGridFunction()
    
    })  

})()

export {generateListOfTasks, addTask}