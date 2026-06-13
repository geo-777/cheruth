import styles from "./RegisterPage.module.css"
import { LeftSection } from "./components/LeftSection"
import { AuthFormCard } from "./components/AuthFormCard"
import { ArrowRight } from "lucide-react"

export function RegisterPage () {

    return(
        <div className={styles.registerPage}>
            <LeftSection/>
            <section className={styles.rightSection}>
                <AuthFormCard footerText="Already have an account?" footerLink="Log In">
                    <h1 className={styles.welcomeText}>Create your account</h1>
                    <p className={styles.subTitle}>Start shortening links in seconds.</p>

                    <form className={styles.registerForm}>
                        <label htmlFor="name">
                            <span className={styles.nameLabel}>Name</span>
                            <input type="text" id="name" className={styles.inputBar} placeholder="Jane Doe" required/>
                        </label>
                        <label htmlFor="email">
                            <span className={styles.emailLabel}>Email</span>
                            <input type="email" id="email" className={styles.inputBar} placeholder="you@example.com" required/>
                        </label>
                        <label htmlFor="password">
                            <span className={styles.passwordLabel}>
                                <span>Password</span>
                            </span>
                            <input type="password" id="password" className={styles.inputBar} placeholder="· · · · · · · ·" required/>
                        </label>
                        <button className={styles.registerBtn}>
                            Create Account
                            <ArrowRight size={16}/>
                        </button>
                        <p className={styles.cardFooter}>no credit card · free forever</p>
                    </form>
                </AuthFormCard>
            </section>
        </div>
    )
}