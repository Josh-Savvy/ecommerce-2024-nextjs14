import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ddd" offset="20%" />
      <stop stop-color="#ccc" offset="50%" />
      <stop stop-color="#ddd" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ddd" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
	typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export function formatNumber(value: number): string {
	if (value >= 1e9) return (value / 1e9).toFixed(1).split(".").join(",") + "b";
	else if (value >= 1e6) return (value / 1e6).toFixed(1).split(".").join(",") + "m";
	else if (value >= 1e3) return (value / 1e3).toFixed(3).split(".").join(",") + "k";
	else return value.toFixed(0);
}
