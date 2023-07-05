import { fileHandler } from "../helpers/fileHandler.js";

const fileUrl = "../data/day2.txt";
const lines = fileHandler(fileUrl);

/* Process all the data an return an array of arrays */
export const processData = () => {
  let totalScore = 0;
  /*  Cicle every Line and push
   *  it to a clone array and calculate
   * the results
   */
  lines.forEach((line) => {
    let newLine = line.trimEnd();
    let copy = newLine.split(" ");
    if (copy.length === 2) {
      let score = 0;
      score = calculatePlays(copy);
      totalScore = totalScore + score;
    }
    copy = [];
  });
  return totalScore;
};

/* Calculate the posible plays combinations and
 * return the results
 */
const calculatePlays = (array = []) => {
  /* Check the array */
  if (array.length === 0) {
    return new Error("invalid play");
  }

  /* Check each 9 combinations an return the result */
  if (array[0] === "A" && array[1] === "X") {
    /* If the Elf trow Rock and i trow Rock return 1 for Rock + 3 for Draw*/
    return 4;
  } else if (array[0] === "A" && array[1] === "Y") {
    /* If the Elf trow Rock and i trow Paper return 2 for Paper + 6 for Win*/
    return 8;
  } else if (array[0] === "A" && array[1] === "Z") {
    /* If the Elf trow Rock and i trow Scissors return 3 for Scissors + 0 for Lose*/
    return 3;
  } else if (array[0] === "B" && array[1] === "X") {
    /* If the Elf trow Paper and i trow Rock return 1 for Rock + 0 for Lose*/
    return 1;
  } else if (array[0] === "B" && array[1] === "Y") {
    /* If the Elf trow Paper and i trow Paper return 2 for Rock + 3 for Draw*/
    return 5;
  } else if (array[0] === "B" && array[1] === "Z") {
    /* If the Elf trow Paper and i trow Scissors return 3 for Scissors + 6 for Win*/
    return 9;
  } else if (array[0] === "C" && array[1] === "X") {
    /* If the Elf trow Scissors and i trow Rock return 1 for Rock  + 6 for Win*/
    return 7;
  } else if (array[0] === "C" && array[1] === "Y") {
    /* If the Elf trow Scissors and i trow Paper return 2 for Paper  + 0 for Lose*/
    return 2;
  } else if (array[0] === "C" && array[1] === "Z") {
    /* If the Elf trow Scissors and i trow Scissors return 3 for Paper  + 3 for Draw*/
    return 6;
  }
};
