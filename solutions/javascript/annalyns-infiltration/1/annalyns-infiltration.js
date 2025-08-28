// TASK NUMBER ONE
export function canExecuteFastAttack(knightIsAwake) {
  if(!knightIsAwake) {
    return true
  }else{
    return false
  }
}

// TASK NUMBER TWO
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
    return true
  }else {
    return false
  }
}

// TASK NUMBER THREE
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(prisonerIsAwake && !archerIsAwake){
    return true
  }else{
    return false
  }
}

// TASK NUMBER FOUR
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if((petDogIsPresent && !archerIsAwake) || (!knightIsAwake && !archerIsAwake && prisonerIsAwake)){
    return true
  }else {
    return false
  }
}