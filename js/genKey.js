// function that generated random number to id
let genKey = function(){
    let randomNumber = Math.floor(Math.random()*10000)
    let randomDate = Date.now()
    let randomKey = randomNumber*randomDate
    return randomKey
};

export{genKey}