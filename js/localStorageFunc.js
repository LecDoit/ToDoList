import * as projectFunction from './projectFunction.js'
import * as tasksFunction from './taskFunction.js'


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

localStorage.clear()
let releaseStorage = function(name,array){

    localStorage.setItem( name, JSON.stringify(array))
    let toParse = localStorage.getItem(name)
    let ready = JSON.parse(toParse)
    // console.log(ready)
    return ready

}

// releaseStorage('projects',projectFunction.projects)
// releaseStorage('tasks',tasksFunction.tasks)

export {releaseStorage}


// localStorage.setItem('listOfProjects', JSON.stringify(projectFunction.projects))
// localStorage.setItem('listOfTasks', JSON.stringify(tasksFunction.tasks))

// let test = localStorage.getItem('listOfTasks')
// console.log(JSON.parse(test))


// if (storageAvailable('sessionStorage')) {
//     console.log("Yippee! We can use localStorage awesomeness")
//   }
//   else {
//     console.log("Too bad, no localStorage for us")
//   }
