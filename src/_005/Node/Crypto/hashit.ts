import { createHash } from "crypto";

export interface hashIt {
  (string: string): string;
}
export const hashIt: hashIt = string => {
  const hash = createHash("sha256");
  hash.update(string);
  const hex = hash.digest("hex");
  hash.destroy();
  return hex;
};
