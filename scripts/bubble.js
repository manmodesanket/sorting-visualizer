
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    let arena = document.querySelector(".arena");
    let childs = document.querySelector(".arena").childNodes;
    for(let i = 0; i < arena.childElementCount - 1; i++) {
        //console.log(first);
        for(let j = 0; j < (arena.childElementCount - i - 1); j++) {
            childs[j].style.backgroundColor = "yellow";
            let first = childs[j].style.height;
            first = first.substr(0, first.length - 2);
            first = parseInt(first);
            childs[j + 1].style.backgroundColor = "green";
            let second = childs[j + 1].style.height;
            second = second.substr(0, second.length - 2);
            second = parseInt(second);
            //console.log(second);
            await sleep(100);
            if(first > second) {
                childs[j + 1].parentNode.insertBefore(childs[j + 1], childs[j]);
            }
            childs[j].style.backgroundColor = "blueviolet";
            childs[j + 1].style.backgroundColor = "blueviolet";
        }
    }
}

export {bubbleSort};