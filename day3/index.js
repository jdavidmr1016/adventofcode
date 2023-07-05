import { compareSetOfThree, halfsCompares } from "../helpers/compareStrings.js";
import { fileHandler } from "../helpers/fileHandler.js";

const fileUrl = "../data/day3.txt";
const data = fileHandler(fileUrl);

/* Extract all the data and check any coincidence */
export const handleRucksData = () => {
  let matchesSum = 0;

  /* Cicle trought the rucks */
  data.forEach((line) => {
    if (line.length !== 0) {
      /* Compare half pockets of the rouck and return matches */
      let matches = halfsCompares(line);
      /* if isnt empty process it */
      if (matches.length !== 0) {
        /* if have more than 1 coincidence */
        if (matches.length === 2) {
          let first = matches.slice(0, 1);
          /* if they are 2 calculate first */
          let second = matches.slice(1, 2);

          let value = makePriority(first);
          let secondValue = makePriority(second);

          matchesSum = matchesSum + value + secondValue;
        } else {
          let value = makePriority(matches);

          matchesSum = matchesSum + value;
        }
      }
    }
  });

  return matchesSum;
};
/* Convert coincidences to values of priority */
export const makePriority = (char) => {
  let asciiCode = char.charCodeAt(0);

  if (asciiCode >= 97 && asciiCode <= 122) {
    // Lowercase char (a-z)
    return asciiCode - 96;
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    // HigerCase char (A-Z)
    return asciiCode - 38;
  } else {
    // Invalid char
    return -1;
  }
};

/* Extract the data on groups of
 * three and chech any item on the
 * three rucks */
export const handleThreeRucksData = () => {
  let matchedGroupSum = 0;
  const newfileUrl = "../data/day3p2.txt";
  const newData = fileHandler(newfileUrl);

  if (!newData) {
    throw new Error("please add a valid file path to process");
  }

  for (let i = 0; i < newData.length; i += 3) {
    let set = newData.slice(i, i + 3);

    let match = compareSetOfThree(set);
    if (match) {
      let priority = makePriority(match);
      matchedGroupSum += priority;
    }
  }

  return matchedGroupSum;
};
