/* Cicle each array an sume its values and trow the greater */
export const calcThreeMaxCalories = (data = [], maxCalories) => {
  let topThreeTotal = 0;
  let elvesCalories = [];
  let filteredCalories = [];
  let filteredCopy = [];
  let secondMax = 0;
  let thirdMax = 0;
  /* Cicle fist and obtain an array with the sum of calories */
  for (let i = 0; i < data.length; i++) {
    let array = data[i];
    let sum = 0;
    array.forEach((elem) => {
      let calories = parseInt(elem);
      sum = sum + calories;
    });
    elvesCalories.push(sum);
  }

  /* Filter and get second max */
  [filteredCalories, secondMax] = arrayFilterAndFindMax(
    elvesCalories,
    maxCalories
  );
  /* Filter and get third max  */
  [filteredCopy, thirdMax] = arrayFilterAndFindMax(filteredCalories, secondMax);

  topThreeTotal = maxCalories + secondMax + thirdMax;

  return topThreeTotal;
};

/* Returns a copy of the array without the value and the max value of the copy  */
const arrayFilterAndFindMax = (array, valueToFilter) => {
  let filteredArray = array.filter((value) => value !== valueToFilter);
  let maxValue = Math.max(...filteredArray);

  return [filteredArray, maxValue];
};
