import * as domObj from './domObjects.js'


let floatingTaskWinowFunc = (function(){
    domObj.openTaskWindow.addEventListener('click',function(){

        if (domObj.floatingTaskWindow.classList == 'active'){
            domObj.floatingTaskWindow.classList.remove('active')
            domObj.floatingTaskWindow.classList.add('hidden')
        } else if (domObj.floatingTaskWindow.classList == 'hidden'){
            domObj.floatingTaskWindow.classList.remove('hidden')
            domObj.floatingTaskWindow.classList.add('active')}

    })
})();


let floatingProjectWindowFunc = (function(){
    domObj.openProjectWindow.addEventListener('click',function(){

        if (domObj.floatingProjectWindow.classList == 'vis'){
            domObj.floatingProjectWindow.classList.remove('vis')
            domObj.floatingProjectWindow.classList.add('hid')
        } else if (domObj.floatingProjectWindow.classList == 'hid'){
            domObj.floatingProjectWindow.classList.remove('hid')
            domObj.floatingProjectWindow.classList.add('vis')}
    })

})();



export{floatingTaskWinowFunc, floatingProjectWindowFunc}

