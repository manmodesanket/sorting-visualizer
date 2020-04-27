import {bubbleSort} from './scripts/bubble.js';
import {insertionSort} from './scripts/insertion.js';

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
    //console.log(document.querySelector('.arena').childElementCount);
}




let create = document.getElementById("create");
create.addEventListener('click', createArray);



let bubble = document.getElementById("bubble");
bubble.addEventListener('click', bubbleSort);

let insertion = document.getElementById("insertion");
insertion.addEventListener('click', function () {
    insertionSort(array);
});


/*let merge = document.getElementById("merge");
merge.addEventListener('click', function() {
    
    
    let childs = document.querySelector('.arena').childNodes;
    let start = 0;
    let end = childs.length - 1;
    mergeSort(start, end);
});*/


