let sortingMethod = "";

let array = [];



function between(min, max) {  
    let random = Math.random();
    let randomNumber = ((Math.floor(random * (max - min + 1)) + min));
    return randomNumber;
}

function createArray() {
    array = []
    for(let i = 0; i < 20; i++) {
        array.push(between(3, 20));
    }
    let arena = document.querySelector(".arena");
    arena.innerHTML = '';
    for(let i = 0; i < 20; i++) {
        let element = document.createElement('div');
        element.setAttribute('class', 'element');
        element.style.height = (array[i] * 20) + "px"; 
        arena.appendChild(element);
    }
}


let create = document.getElementById("create");

create.addEventListener('click', createArray);





