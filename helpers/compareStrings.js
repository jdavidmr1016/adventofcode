/* Compares two halfs of an string an returns the repeated value  */
export const halfsCompares = (str) => {
  if (!str) {
    throw new Error("please send a string to compare");
  }
  let lenght = str.length;

  let half = lenght / 2;

  let fistHalf = str.slice(0, half);

  let secondHalf = str.slice(half, lenght);

  let matches = "";

  for (let i = 0; i < half; i++) {
    let char = fistHalf[i];
    let match = secondHalf.includes(char);

    if (match) {
      matches = char;
    }
  }

  return matches;
};
export const compareSetOfThree = (array) => {
  if (!array) {
    throw new Error("please send array to compare");
  }
  let badge = "";
  let strFirst = array[0];
  let strSecond = array[1];
  let strThird = array[2];

  for (let i = 0; i < array[0].length; i++) {
    let char = strFirst[i];
    let match = strSecond.includes(char);
    let matchSecond = strThird.includes(char);

    if (match && matchSecond) {
      badge = char;
    }
  }

  return badge;
};
