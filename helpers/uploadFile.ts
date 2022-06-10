import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const uploadFile = (
  files: any,
  validExtensions = ["png", "jpg", "jpeg", "gif"],
  folder = "imgs"
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const { filename } = await files;

    const nameParts = filename.split(".");
    const extension = nameParts[nameParts.length - 1];

    if (!validExtensions.includes(extension)) {
      return reject(
        `Extension ${extension} is not allowed - ${validExtensions}`
      );
    }

    const tempName = uuidv4() + "." + extension;
    const uploadPath = path.join(__dirname, "../uploads/", folder, tempName);

    fs.createWriteStream(uploadPath);
    resolve(tempName);
  });
};
