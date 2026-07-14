import type React from "react";
import styles from "./Button.module.css"
import { type ButtonProps } from "./Button.type";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { 
            variant = "default", 
            size = "default", 
            asChild = false, 
            className = "", 
            ...props
        }, ref,) => {
                const Component = asChild ? Slot : "button";

                return(
                    <Component 
                        ref={ref}
                        className = 
                        {`
                            ${styles.button} 
                            ${styles[`button_variant_${variant}`]} 
                            ${styles[`button_size_${size}`]} 
                            ${className}
                        `}
                        {...props}
                    />
                );
            }
)