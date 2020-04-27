import { bubbleSort } from './scripts/bubble.js';
import { insertionSort } from './scripts/insertion.js';
import { mergeSort } from './scripts/merge.js'
import { quickSort } from './scripts/quick.js'

let array = [];

let sorting = 0;

let canCreate = 1;

function between(min, max) {
    let random = Math.random();
    let randomNumber = ((Math.floor(random * (max - min + 1)) + min));
    return randomNumber;
}

async function createArray() {
    array = []
    for (let i = 0; i < 20; i++) {
        array.push(between(3, 20));
    }
    let arena = document.querySelector(".arena");
    arena.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        let element = document.createElement('div');
        element.setAttribute('class', 'element');
        element.style.height = (array[i] * 20) + "px";
        arena.appendChild(element);
    }
    //console.log(document.querySelector('.arena').childElementCount);
}





    let create = document.getElementById("create");
    create.addEventListener('click', async function () {
        if(canCreate === 1) {
            canCreate = 0;
            await createArray();
            canCreate = 1;
            sorting = 1;
        }
        
    });



let bubble = document.getElementById("bubble");
bubble.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        canCreate = 0;
        await bubbleSort();
        sorting = 1;
        canCreate = 1;
    }
});


let insertion = document.getElementById("insertion");
insertion.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        canCreate = 0;
        await insertionSort(array);
        sorting = 1;
        canCreate = 1;
    }
});



let merge = document.getElementById("merge");
merge.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        canCreate = 0;
        let start = 0;
        let end = array.length - 1;
        await mergeSort(array, start, end);
        sorting = 1;
        canCreate = 1;
    }
});


let quick = document.getElementById("quick");
quick.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        canCreate = 0;
        let l = 0;
        let h = array.length;
        array.push(1000000);
        await quickSort(array, l, h);
        sorting = 1;
        canCreate = 1;
    }
});



