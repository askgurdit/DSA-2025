//* Programming Challenge: Number of Days Between Two Dates

//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD".

// Hint
// Days= 24*60*60*1000

const calculateDaysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d1 - d2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

console.log(calculateDaysBetweenDates ("2024-01-01", "2024-01-31")); // Output: 30