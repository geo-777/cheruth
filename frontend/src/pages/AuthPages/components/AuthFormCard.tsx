import { Link } from "@tanstack/react-router"
import styles from "./AuthFormCard.module.css"

interface AuthContent {
    footerText : string,
    footerLink : string,
    children : React.ReactNode
}

export function AuthFormCard ({ footerText, footerLink, children } : AuthContent) {
    
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                { children }
            </div>
            <p className={styles.signupLink}>{footerText}{" "}<Link to={footerLink === 'Log In' ? '/login' : '/register'}>{footerLink}</Link></p>
        </div>
    )

}