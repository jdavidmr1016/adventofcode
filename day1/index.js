import { fileHandler } from "../helpers/fileHandler.js";

const fileUrl = "../data/day1.txt";
const lines = fileHandler(fileUrl);

/* Function to process the File of data and return an Array of Elves
 *  containing each an array of calories
 */
export const processFile = () => {
  const dataArray = [];
  let copy = [];
  /*  Cicle every Line and push
   *  it to a clone array until reach the
   *  empty space that delimit between each Elf,
   *  push this copy to the dataArray
   *  and make the copy array empty again */
  lines.forEach((line) => {
    if (line.length !== 0) {
      copy.push(line);
    } else {
      dataArray.push(copy);
      copy = [];
    }
  });

  return dataArray;
};

/* Cicle each array an sume its values and trow the greater */
export const calcMaxCalories = (data = []) => {
  let maxCalories = 0;
  for (let i = 0; i < data.length; i++) {
    let array = data[i];
    let sum = 0;
    array.forEach((elem) => {
      let calories = parseInt(elem);
      sum = sum + calories;
    });
    if (sum >= maxCalories) {
      maxCalories = sum;
    }
  }
  return maxCalories;
};
