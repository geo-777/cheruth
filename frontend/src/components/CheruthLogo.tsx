import { Link2 } from "lucide-react";
import styles from "./CheruthLogo.module.css"
import { Link } from "@tanstack/react-router";


export function CheruthLogo() {

    return(
        <Link to='/'>
            <div className={styles['nav-logo']}>
                <span>
                    <Link2 size={15} strokeWidth={1.75}/>{" "}
                </span>{" "}
                <p>cheruth</p>
            </div>
        </Link>
    )

}