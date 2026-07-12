import { Link2 } from "lucide-react";
import styles from "./CheruthLogo.module.css"
import { Link } from "@tanstack/react-router";
import { ACCESS_TOKEN, authStorage } from "../../services/api/authHelpers";


export function CheruthLogo() {

    const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN);

    return(
        <Link to={`${isAuthenticated ? '/dashboard' : '/'}`}>
            <div className={styles['nav-logo']}>
                <span>
                    <Link2 size={15} strokeWidth={1.75}/>{" "}
                </span>{" "}
                <p>cheruth</p>
            </div>
        </Link>
    )

}