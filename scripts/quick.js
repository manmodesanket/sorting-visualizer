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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function quickSort(array, l, h, speed) {
  let j;
  //console.log("in quick sort", l, h);
  let childs = document.querySelector(".arena").childNodes;
  if (l < h) {
    j = await partition(array, l, h, speed);
    childs[j].style.backgroundColor = "green";
    //console.log("pivot", j);
    //console.log(l, j, h);
    await quickSort(array, l, j, speed);
    await quickSort(array, j + 1, h, speed);
  }
}

async function partition(array, l, h, speed) {
  //console.log("in partiotion", l , h);
  let childs = document.querySelector(".arena").childNodes;
  childs[l].style.backgroundColor = "red";
  childs[h - 1].style.backgroundColor = "red";
  await sleep(speed);
  if (run == false) {
    await pauseHandler();
  }
  childs[l].style.backgroundColor = "blueviolet";
  childs[h - 1].style.backgroundColor = "blueviolet";
  let pivot = array[l];
  let i = l;
  let j = h;
  while (i < j) {
    do {
      i++;
    } while (array[i] <= pivot);
    do {
      j--;
    } while (array[j] > pivot);
    if (i < j) {
      //console.log(array[i], array[j]);
      childs[i].style.backgroundColor = "yellow";
      childs[j].style.backgroundColor = "green";
      await sleep(speed);
      let temp = array[i];
      array[i] = array[j];
      childs[i].style.height = array[j] * 20 + "px";
      array[j] = temp;
      childs[j].style.height = temp * 20 + "px";
      if (run == false) {
        await pauseHandler();
      }
      childs[i].style.backgroundColor = "blueviolet";
      childs[j].style.backgroundColor = "blueviolet";
    }
    //await sleep(200);
  }
  let temp = array[l];
  array[l] = array[j];
  childs[l].style.height = array[j] * 20 + "px";
  array[j] = temp;
  childs[j].style.height = temp * 20 + "px";

  childs[j].style.backgroundColor = "pink";
  await sleep(speed);
  childs[j].style.backgroundColor = "blueviolet";
  return j;
}

export default quickSort;
