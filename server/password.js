const crypto = require("node:crypto");
import { passwordValue } from "../client/src/services/auth/Auth";

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
  };
}

const pas = encrypt(passwordValue);
console.log(pas)
