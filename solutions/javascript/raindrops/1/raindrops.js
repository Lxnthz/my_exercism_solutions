//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = num => {
  var out = "";

  if(num % 3 == 0) out += "Pling";
  if(num % 5 == 0) out += "Plang";
  if(num % 7 == 0) out += "Plong";

  return out ? out : num.toString();
};
