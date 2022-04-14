const blockWidth = 2;
let width;
let height;

let array = [];

function setup() {
  let width = windowWidth * 0.98;
  let height = windowHeight * 0.98;

  createCanvas(width, height);

  for (let i = 0; i < width / blockWidth; i++) {
    let rnd = noise(i / 100, height) * height;
    array.push(rnd);
  }
  bubbleSort();
}

function draw() {
  background(0);

  for (let i = 0; i < array.length - 1; i++) {
    stroke(255);
    rect(i * blockWidth, 0, blockWidth, array[i]);
  }
}

async function bubbleSort() {
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        let tmp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = tmp;
      }
    }
    await sleep(10);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
