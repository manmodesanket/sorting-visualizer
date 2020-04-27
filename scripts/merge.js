
function mergeSort(start, end) {
    if(start < end) {
        //console.log(start, end);
        let mid = Math.floor((start + end) / 2);
        //console.log(mid);
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        merge(start, mid, end);
    }
}

function merge(start, mid, end) {
    let p = start;
    let q = mid + 1;
    let arr = [];
    let childs = document.querySelector('.arena').childNodes;
    //console.log(childs);
    //console.log(start, mid, end);
    while(p <= mid && q <= end) {
        let first = childs[p].style.height;
        first = first.substr(0, first.length - 2);
        first = parseInt(first);
        let second = childs[q].style.height;
        second = second.substr(0, second.length - 2);
        second = parseInt(second);
        //console.log(first, second);
        if(first <= second) {
            arr.push(childs[p++]);
            //console.log(arr[arr.length - 1], "first");    
        }
        else {
            arr.push(childs[q++]);
        }
    }

    while (p <= mid) {
        arr.push(childs[p]);
        p++;
 
    }

    while (q <= end) {
        arr.push(childs[q]);
        q++;
    }

    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("end");
    /*let k = 0;
    let arena = document.querySelector(".arena");
    for(let i = start; i <= end; i++) {
        arena.replaceChild(arr[k++], childs[i]);
    }*/

}

export {mergeSort};