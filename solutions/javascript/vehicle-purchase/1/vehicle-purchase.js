// TASK NUMBER ONE
export function needsLicense(kind){
  if (kind === "car"){
    return true
  }else if(kind === "truck"){
    return true
  }else{
    return false
  }
}

// TASK NUMBER TWO
export function chooseVehicle(option1, option2) {
  if(option1 < option2){
    return option1 + " is clearly the better choice."
  }else{
    return option2 + " is clearly the better choice."
  };
}

//TASK NUMBER THREE
export function calculateResellPrice(originalPrice, age) {
  if(age < 3){
    return originalPrice * 0.8
  }else if(age >= 3 && age <= 10){
    return originalPrice * 0.7
  }else{
    return originalPrice * 0.5
  };
}
