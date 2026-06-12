import { Link2 } from "lucide-react";
import styles from "./CheruthLogo.module.css"


export function CheruthLogo() {

    return(
        <div className={styles['nav-logo']}>
            <span>
                <Link2 size={15} strokeWidth={1.75} />{" "}
            </span>{" "}
            <p>cheruth</p>
        </div>
    )

}