import styles from "./LoginPage.module.css"
import { LeftSection } from "./components/LeftSection"
import { AuthFormCard } from "./components/AuthFormCard"
import { ArrowRight } from "lucide-react"

export function LoginPage() {

    return(
        <div className={styles.loginPage}>
            <LeftSection/>
            <section className={styles.rightSection}>
                <AuthFormCard footerText="No Account?" footerLink="Sign Up">
                    <h1 className={styles.welcomeText}>Welcome back</h1>
                    <p className={styles.subTitle}>Log in to manage your links.</p>

                    <form className={styles.loginForm}>
                        <label htmlFor="email">
                            <span className={styles.emailLabel}>Email</span>
                            <input type="email" id="email" className={styles.inputBar} placeholder="you@example.com" required/>
                        </label>
                        <label htmlFor="password">
                            <span className={styles.passwordLabel}>
                                <span>Password</span>
                                <a href="" className={styles.forgetLink}>Forgot?</a>
                            </span>
                            <input type="password" id="password" className={styles.inputBar} placeholder="· · · · · · · ·" required/>
                        </label>
                        <button className={styles.loginBtn}>
                            Log in 
                            <ArrowRight size={16}/>
                        </button>
                        <p className={styles.cardFooter}>secured · no tracking</p>
                    </form>
                </AuthFormCard>
            </section>
        </div>
    )

}