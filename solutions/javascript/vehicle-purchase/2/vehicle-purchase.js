// TASK NUMBER ONE
export function needsLicense(kind){
  return kind === 'car' || kind === 'truck'
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
