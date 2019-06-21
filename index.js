
function produceDrivingRange(range) {
  return function(startingBlock, endingBlock) {
     let num1 = parseInt(startingBlock);
     let num2 = parseInt(endingBlock);
     let blocks = Math.abs(num1 - num2);
     let differences = blocks - range;
     if (differences > 0)  {
       return (`${differences} blocks out of range`);
     } else {
        return (`within range by ${-differences}`);
     };
  };
}

function produceTipCalculator(tipRate) {
  return function(fare) {
    return fare * tipRate;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = driverId ++;
      this.name = name;
    };
  };
}
