// TASK NUMBER ONE
export function getItem(cards, position) {
  return cards[position]
}

// TASK NUMBER TWO
export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
}

//TASK NUMBER THREE
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

// TASK NUMBER FOUR
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards
}

// TASK NUMBER FIVE
export function removeItemFromTop(cards) {
  cards.pop();
  return cards
}

// TASK NUMBER SIX
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  if (cards.length == stackSize) {
    return true
  } else {
    return false
  };
}
