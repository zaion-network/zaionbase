import { createHmac } from "crypto";

interface hmacIt {
  (secret: string, value: string): string;
}

export const hmacIt: hmacIt = (secret: string, value: string) =>
  createHmac("sha256", secret).update(value).digest("hex");
