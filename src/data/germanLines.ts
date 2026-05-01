// germanLines.ts
import { germanRaw } from "./germanRaw";

export const germanLines: string[] = germanRaw
  .split("\n")                 // in Zeilen aufteilen
  .map(line => line.trim())    // Leerzeichen entfernen
  .filter(line => line !== ""); // LEERE ZEILEN entfernen
