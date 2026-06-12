import { ArrowRight, Check } from "lucide-react"
import { CheruthLogo } from "../../components/CheruthLogo"
import styles from "./LoginPage.module.css"

export function LoginPage() {

    return(
        <div className={styles.loginPage}>
            <section className={styles.leftSection}>
                <a href=""><CheruthLogo /></a>
                <div className={styles.leftSectionContent}>
                    <h2 className={styles.leftLabels}>
                        <span>Small links.</span>
                        <span>Simple.</span>
                    </h2>
                    <p className={styles.subText}>The open-source URL shortener with proper analytics. Self-host it in minutes, or run it on us.</p>
                    <ul className={styles.listPoints}>
                        <li><Check size={16} color="#000000"/> Custom aliases</li>
                        <li><Check size={16} color="#000000"/> Real analytics</li>
                        <li><Check size={16} color="#000000"/> Open-source · MIT</li>
                    </ul>
                    <div className={styles.example}>
                        <p className={styles.exampleLink}>acme.com/2026/keynote…</p>
                        <ArrowRight size={16} color='#757575'/>
                        <p className={styles.exampleLink}>cher.li/launch</p>
                    </div>
                </div>
                <div className={styles.leftSectionFooter}>
                    cheruth · v1.0 · MIT
                </div>
            </section>
            <section className={styles.rightSection}>
                <div className={styles.cardWrapper}>
                    <div className={styles.card}>
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
                    </div>
                    <p className={styles.signupLink}>No account?{" "}<a href="">Sign Up</a></p>
                </div>
            </section>
        </div>
    )

}