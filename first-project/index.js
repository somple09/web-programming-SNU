function buildPyramid(height) {
  let pyramid = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= height - i; j++) {
      pyramid += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      pyramid += "*";
    }
    pyramid += "\n";
  }
  console.log(pyramid);
}

buildPyramid(5);
