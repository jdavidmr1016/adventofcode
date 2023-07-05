// import { processFile, calcMaxCalories } from "./day1/index.js";
//import { calcThreeMaxCalories } from "./day1/part2.js";
import { processData, processDataWithModiffiedPlays } from "./day2/index.js";

/* Extract the data to an array of Elves containing an array of calories */
//const data = processFile();
/* Calc the max of calories that is carring an Elv */
//const maxCalories = calcMaxCalories(data);
//console.log("🚀 ~ file: index.js:8 ~ maxCalories:", maxCalories);
/* Calc the sume of top three Elvs */
//const topThreeMaxCalories = calcThreeMaxCalories(data, maxCalories);
/* console.log(
  "🚀 ~ file: index.js:11 ~ topThreeMaxCaloriesTotal:",
  topThreeMaxCalories
); */

const totalScore = processData();
console.log("🚀 ~ file: index.js:18 ~ totalScore:", totalScore);

const modifiedStrategyScore = processDataWithModiffiedPlays();
console.log(
  "🚀 ~ file: index.js:21 ~ modifiedStrategyScore:",
  modifiedStrategyScore
);
