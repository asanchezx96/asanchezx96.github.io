import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";

export const switchCase = (response: string, options: any) => { //eslint-disable-line
    return options[response]
        ? options[response]()
        : options["DEFAULT"] && options["DEFAULT"]();
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}