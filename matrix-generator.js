function matrixGenerator(rows, columns) {
  let outsideArr = [];

  for (let i = 0; i < rows; i++) {
    let innerArr = [];

    for (let j = 0; j < columns; j++) {
      let randomNumber = Math.floor((Math.random() * 100) + 1);
      innerArr.push(randomNumber);
    }
    innerArr.sort((a, b) => {
      return a - b;
    });

    outsideArr.push(innerArr);
  }
  outsideArr.sort((a, b) => {
    return a[0] - b[0];
  })
  return outsideArr;
}

module.exports = matrixGenerator;
