// Code your solution in this file!
const headQuaters = 42;

function distanceFromHqInBlocks(pickUpLocation) {
  let blockNumber = Math.abs(pickUpLocation - headQuaters);
  return blockNumber;
}

function distanceFromHqInFeet(pickUpLocation) {
  const dist = Math.abs(264 * distanceFromHqInBlocks(pickUpLocation));
  return dist;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);
  if (dist <= 400) {
    return 0;
  } else if (dist < 2000) {
    return (dist - 400) * 0.02;
  } else if (dist < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
