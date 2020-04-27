
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(array, start, end) {
    if(start < end) {
        let childs = document.querySelector('.arena').childNodes;
        let mid = Math.floor((start + end) / 2);
        await mergeSort(array, start, mid);
        await mergeSort(array, mid + 1, end);
        merge(array, start, mid, end);
        await sleep(500);
        childs[start].style.backgroundColor = "blueviolet";
        childs[end].style.backgroundColor = "blueviolet";
    }
}

function merge(array, start, mid, end) {
    let p = start;
    let q = mid + 1;
    let arr = [];
    let childs = document.querySelector('.arena').childNodes;
    childs[start].style.backgroundColor = "yellow";
    childs[end].style.backgroundColor = "green";
    while(p <= mid && q <= end) {
        
        if(array[p] <= array[q]) {
            arr.push(array[p++]);

        }
        else {
            arr.push(array[q++]);
        }
    }
    
    while (p <= mid) {
        arr.push(array[p]);
        p++;
    }

    while (q <= end) {
        arr.push(array[q]);
        q++;
    }

    let k = 0;
    for(let i = start; i <= end; i++) {
        array[i] = arr[k++];
    }
   
    for(let i = start; i <= end; i++) {
        childs[i].style.height = (array[i] * 20) + "px";
    }
    
}

export {mergeSort};