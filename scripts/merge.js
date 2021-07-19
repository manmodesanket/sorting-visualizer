const pause = document.getElementById("pause");

let run = true;

pause.addEventListener("click", () => {
  run = run === true ? false : true;
  pause.textContent = run === true ? "Pause" : "Play";
});

async function pauseHandler() {
  while (run == false) await sleep(1);
  return;
}

let halt = 0;

const stop = document.getElementById("stop");

stop.addEventListener("click", () => {
  halt = 1;
});

function sleep(ms) {
  //console.log(ms);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mergeSort(array, start, end, speed) {
  //console.log(speed);
  if (start < end) {
    let childs = document.querySelector(".arena").childNodes;
    let mid = Math.floor((start + end) / 2);
    await mergeSort(array, start, mid, speed);
    await mergeSort(array, mid + 1, end, speed);
    merge(array, start, mid, end, speed);
    //console.log(speed);
    await sleep(speed);
    if (run == false) {
      await pauseHandler();
    }
    childs[start].style.backgroundColor = "blueviolet";
    childs[end].style.backgroundColor = "blueviolet";
  }
}

function merge(array, start, mid, end) {
  let p = start;
  let q = mid + 1;
  let arr = [];
  let childs = document.querySelector(".arena").childNodes;
  childs[start].style.backgroundColor = "yellow";
  childs[end].style.backgroundColor = "green";
  while (p <= mid && q <= end) {
    if (array[p] <= array[q]) {
      arr.push(array[p++]);
    } else {
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
  for (let i = start; i <= end; i++) {
    array[i] = arr[k++];
  }

  for (let i = start; i <= end; i++) {
    childs[i].style.height = array[i] * 20 + "px";
  }
}

export default mergeSort;
