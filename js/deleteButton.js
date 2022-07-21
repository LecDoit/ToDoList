
import * as taskFunction from './taskFunction.js'
import * as listOfTasks from './listOfTasks.js'

let deleteButtonTaskFunction = function(){
    let delbut = document.querySelectorAll('.del-but')
    delbut.forEach(function(x){
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

export{deleteButtonTaskFunction}