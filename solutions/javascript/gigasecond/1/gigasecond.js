//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  // Get the time value of the input date in milliseconds since the Unix epoch (Jan 1, 1970)
  const dt = date.getTime();

  // Define one gigasecond in milliseconds
  // 1 gigasecond = 1,000,000,000 seconds
  // Multiply by 1000 to convert seconds to milliseconds
  const gs = 1000000000 * 1000;

  // Add the gigasecond (in ms) to the original timestamp
  const res = dt + gs;

  // Convert the resulting timestamp back to a Date object
  // This gives the exact date and time one gigasecond after the input
  return new Date(res);
};
