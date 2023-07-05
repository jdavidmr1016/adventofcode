import { fileHandler } from "../helpers/fileHandler.js";

const fileUrl = "../data/day2.txt";
const lines = fileHandler(fileUrl);

/* Process all the data an return an array of arrays */
export const processData = () => {
  if (lines.length === 0) {
    throw new Error("Please Provide valid data");
  }
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

/* Calculate the posible plays addapting it
 * with the modified strategy
 * return the results
 */
export const processDataWithModiffiedPlays = () => {
  const newfileUrl = "../data/day2p2.txt";
  const newlines = fileHandler(newfileUrl);

  if (lines.length === 0) {
    throw new Error("Please Provide valid data");
  }

  let totalScore = 0;
  /*  Cicle every Line and push
   *  it to a clone array and calculate
   * the results
   */

  newlines.forEach((line) => {
    let newLine = line.trimEnd();
    let copy = newLine.split(" ");
    if (copy.length === 2) {
      let score = 0;

      let modified = modifyPlays(copy);

      score = calculatePlays(modified);
      totalScore = totalScore + score;
    }
    copy = [];
  });
  return totalScore;
};

/* Modify the posible plays combinations and
 * in base to the new strategy
 */
const modifyPlays = (array = []) => {
  /* Check the array */
  if (array.length === 0) {
    return new Error("invalid play");
  }

  /* Check each 9 combinations an modify your play
   *  They
   *  A for Rock,
   *  B  for Paper, and
   *  C for Scissors
   *  ----------------
   *  You
   * X for Rock, value 1
   * Y for Paper value 2
   * Z for Scissors value
   */
  if (array[0] === "A" && array[1] === "X") {
    /* If the Elf trow Rock and i must lose i need to trow Scissors Z*/
    array[1] = "Z";
    return array;
  } else if (array[0] === "A" && array[1] === "Y") {
    /* If the Elf trow Rock and i must Draw i need to trow Rock X */
    array[1] = "X";
    return array;
  } else if (array[0] === "A" && array[1] === "Z") {
    /* If the Elf trow Rock and i must Win i need to trow Paper*/
    array[1] = "Y";
    return array;
  } else if (array[0] === "C" && array[1] === "X") {
    /* If the Elf trow Scissors and i must Lose i need trow Paper*/
    array[1] = "Y";
    return array;
  } else if (array[0] === "C" && array[1] === "Y") {
    /* If the Elf trow Scissors and i must Draw i need trow Scissors*/
    array[1] = "Z";
    return array;
  } else if (array[0] === "C" && array[1] === "Z") {
    /* If the Elf trow Scissors and i must Win i need trow Rock*/
    array[1] = "X";
    return array;
  } else {
    return array;
  }
};
