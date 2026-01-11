// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Funkcja, która inteligentnie łączy klasy Tailwinda, pozwalając na ich nadpisywanie
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}