import { processFile, calcMaxCalories } from "./day1/index.js";
import { calcThreeMaxCalories } from "./day1/part2.js";

/* Extract the data to an array of Elves containing an array of calories */
const data = processFile();
/* Calc the max of calories that is carring an Elv */
const maxCalories = calcMaxCalories(data);
console.log("🚀 ~ file: index.js:8 ~ maxCalories:", maxCalories);

const topThreeMaxCalories = calcThreeMaxCalories(data, maxCalories);
console.log(
  "🚀 ~ file: index.js:11 ~ topThreeMaxCalories:",
  topThreeMaxCalories
);
