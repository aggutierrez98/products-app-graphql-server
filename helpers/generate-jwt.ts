import jwt from "jsonwebtoken";

export const generateJWT = (uid = "") => {
  const privateKey: string = process.env.SECRETORPRIVATEKEY!;

  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      privateKey,
      {
        expiresIn: "7d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Token couldn't be generated");
        } else {
          resolve(token);
        }
      }
    );
  });
};
