import { deleteButtonProjectFunction } from './deleteButton.js'
import * as projectFunction from './projectFunction.js'
import * as tasksFunction from './taskFunction.js'


let releaseStorage = function(name,array){
    localStorage.setItem( name, JSON.stringify(array))
    let toParse = localStorage.getItem(name)
    let ready = JSON.parse(toParse)
    return ready
} 
sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer')

export {releaseStorage}


let clearButton = document.getElementById('clear');
clearButton.addEventListener('click',function(){
    localStorage.clear()
    location.reload()
})

