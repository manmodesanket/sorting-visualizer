

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort (array) {
    let childs = document.querySelector(".arena").childNodes;
    let i, j, key;
    for(i = 1; i < array.length; i++) {
        j = i - 1;
        key = array[i];
        childs[i].style.backgroundColor = "yellow";
        while(j >= 0 && array[j] > key) {
            childs[j].style.backgroundColor = "green";
            array[j + 1] = array[j];
            childs[j + 1].style.height = (array[j] * 20) + "px";
            await sleep(50);
            childs[j].style.backgroundColor = "blueviolet";    
            j = j - 1;
        }
        childs[i].style.backgroundColor = "blueviolet";
        childs[j + 1].style.height = (key * 20) + "px";
        array[j + 1] = key;
    }
    /*for(i = 0; i < childs.length; i++) {
        childs[i].style.height = (array[i] * 20) + "px"; 
    }*/
}

export {insertionSort};