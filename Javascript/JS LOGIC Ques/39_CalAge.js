//* Programming Challenge: Calculate Age from birthDate

//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".

//* Requirements:
//? The function must handle leap years and varying numbers of days in each month accurately.
//? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
//? The output should be the age in whole years.


const calculateAge = (date1) => {
    const d1 = new Date(date1);
    const d2 = new Date();
    console.log(d1);
    console.log(d2);
    let age = d2.getFullYear() - d1.getFullYear();
    const m = d2.getMonth() - d1.getMonth();
    const day = d2.getDate() - d1.getDate();
    if (m < 0 || (m === 0 && day < 0)) {
        age--;
    }
    return age;
  }
    
console.log(calculateAge("1990-05-15")); // Output will vary depending on the current date

//todo Hint
//? Checks if the current month is less than the birth month or if it's the same month but today's date is before the birth date. If either condition is true, it subtracts 1 from the age.

/*
Example Scenarios
Birthday has already passed this year:

Birthdate: May 15, 1990
Current Date: July 10, 2024
m = 7 - 5 = 2 (current month is after the birth month), so no adjustment is needed.
Age: 34 (correct)
Birthday hasn't occurred yet this year (month is earlier):

Birthdate: May 15, 1990
Current Date: March 10, 2024
m = 3 - 5 = -2 (current month is before the birth month), so subtract 1 from the age.
Age: 33 (correct)
Birthday hasn't occurred yet this year (same month, but before birthday):

Birthdate: May 15, 1990
Current Date: May 10, 2024
m = 5 - 5 = 0 (current month is the same as birth month), but day = 10 - 15 = -5 (current day is before the birth day), so subtract 1 from the age.
Age: 33 (correct)
Birthday is today:

Birthdate: May 15, 1990
Current Date: May 15, 2024
m = 5 - 5 = 0, day = 15 - 15 = 0 (current day is the same as the birth day), so no adjustment is needed.
Age: 34 (correct)
*/