// TASK NUMBER ONE
export function frontDoorResponse(line) {
  return line[0];      // JavaScript starts with index 0
}

// TASK NUMBER TWO
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1); // slice(1) = new string start from index 1 (SUMMER) -> (UMMER) 
}

//TASK NUMBER THREE
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}

// TASK NUMBER FOUR
export function backDoorPassword(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1) + ", please";
}


