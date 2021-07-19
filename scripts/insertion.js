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
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function insertionSort(array, speed) {
  stop.disabled = false;
  halt = 0;
  let childs = document.querySelector(".arena").childNodes;
  let i, j, key;
  for (i = 1; i < array.length; i++) {
    j = i - 1;
    key = array[i];
    childs[i].style.backgroundColor = "yellow";
    while (j >= 0 && array[j] > key) {
      childs[j].style.backgroundColor = "green";
      array[j + 1] = array[j];
      childs[j + 1].style.height = array[j] * 20 + "px";
      await sleep(speed);
      if (run == false) {
        await pauseHandler();
      }
      childs[j].style.backgroundColor = "blueviolet";
      j = j - 1;
      if (halt == 1) {
        break;
      }
    }
    childs[i].style.backgroundColor = "blueviolet";
    childs[j + 1].style.height = key * 20 + "px";
    array[j + 1] = key;
    if (halt == 1) {
      console.log(halt);
      halt = 0;
      break;
    }
  }
}

export default insertionSort;
