import styles from "./AuthFormCard.module.css"

interface AuthContent {
    footerText : String,
    footerLink : String,
    children :any
}

export function AuthFormCard ({ footerText, footerLink, children } : AuthContent) {
    
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
                { children }
            </div>
            <p className={styles.signupLink}>{footerText}{" "}<a href="">{footerLink}</a></p>
        </div>
    )

}