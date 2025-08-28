/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  else if (remainingTime != 0) return 'Not done, please wait.';
  else return 'Lasagna is done.'
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'noodles') noodles += 50
    if (layers[i] === 'sauce') sauce += 0.2
  }

  const amount = { 'noodles': noodles, 'sauce': sauce }
  return amount;
}

export function addSecretIngredient(friendList, myList) {
  let secret = friendList[friendList.length - 1];
  myList.push(secret);
}

export function scaleRecipe(recipe, portions) {
  const scaled = {}
  for (const ingredients in recipe) {
    scaled[ingredients] = recipe[ingredients] * (portions / 2); 
  }
  return scaled;
}