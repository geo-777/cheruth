import type React from "react";
import styles from "./Button.module.css"
import { Link } from "@tanstack/react-router";

interface ButtonProps{
    children: React.ReactNode
}

export function Button({ children }: ButtonProps) {

    return(
        <Link>
            <button className={styles.main}>
                { children }
            </button>
        </Link>
    );

}