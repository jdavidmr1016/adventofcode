import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const fileHandler = (filepath, separator = "\n") => {
  if (!filepath) {
    throw new Error("Please a valid file path");
  }
  const url = path.join(__dirname, filepath);

  const fileData = fs.readFileSync(url, "utf8");

  // Process the file content
  const lines = fileData.split(separator); // Split the content into lines

  /* if (error) {
    throw new Error(error);
  } */
  return lines;
};
