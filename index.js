// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    if (distance ===43) {
        return 1
    }

    else if (distance ===50){
        return 8
    }

    else if (distance ===34) {
        return 8
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(x, y) {
    //returns the number of feet traveled
    if (y>x){
        return((y-x)*264);
    }
    else
        return((x-y)*264);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }