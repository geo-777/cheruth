import { TerminalWindow } from "../../../shared/components/TerminalWindow/Terminal";
import styles from "./Analytics.module.css"

export function Analytics() {

    return(
        <TerminalWindow canFloat={false}>
            <div className={styles.header}>
                <span><i className="fa-solid fa-circle"></i><i className="fa-solid fa-circle"></i><i className="fa-solid fa-circle"></i></span>
            </div>
        </TerminalWindow>
    )

}