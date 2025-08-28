//TASK NUMBER ONE - This function used to show how much the freelancer earn in a one day work (8 hours a day)
export function dayRate(ratePerHour) {
  return ratePerHour * 8;                   
}

// TASK NUMBER TWO - This function used to show how many days the freelancer need to work until the fixed budget exhausted
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));  
}

// TASK NUMBER THREE 
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numMonths = Math.floor(numDays / 22); // How many month in (numDays) rounded down
  let monthlyRate = dayRate(ratePerHour) * 22; // Monthly payment
  let monthlyDiscountRate = (1 - discount) * monthlyRate; // The discount they give to the client every months
  let remainingDays = numDays % 22; // The remaining days they need to work after (numMonths) ended
  let remainingDaysRate = remainingDays * dayRate(ratePerHour); // The rate they get in the extra days
  
  return Math.ceil((numMonths * monthlyDiscountRate) + remainingDaysRate);
}
