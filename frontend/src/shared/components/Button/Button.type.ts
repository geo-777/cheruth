import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = 
 | "default"
 | "destructive"
 | "outline"
 | "secondary"
 | "ghost"
 | "link";

 export type ButtonSize = "default" | "lg" | "md" | "sm";

 export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : ButtonVariant;
    size? : ButtonSize;
    asChild? : boolean; 
}