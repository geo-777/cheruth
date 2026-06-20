import type React from "react";
import styles from "./Terminal.module.css"

interface TerminalProps {
    canFloat: boolean,
    children: React.ReactNode
}

export function TerminalWindow({ canFloat, children }: TerminalProps) {

    return(
        <section className={styles.terminalWrapper}>
            <div className={`${styles.terminal} ${canFloat ? 'styles.float' : ''}`}>
                { children }                    
            </div>
        </section>
    );

}