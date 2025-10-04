import crypto from "crypto";
import { passwordValue } from "../client/src/services/auth/Auth";

const algorithm = "aes-256-cbc";

const key = Buffer.from(
  process.env.CRYPTO_KEY || crypto.randomBytes(32).toString("hex"),
  "hex"
);

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex"),
  };
}

function decrypt(encryptedData, ivHex) {
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedData, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

const pas = encrypt(passwordValue);
console.log("Encrypted:", pas);

const original = decrypt(pas.encryptedData, pas.iv);
console.log("Decrypted:", original);
