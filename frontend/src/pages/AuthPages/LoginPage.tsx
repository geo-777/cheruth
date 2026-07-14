import styles from "./LoginPage.module.css"
import { LeftSection } from "./components/LeftSection"
import { AuthFormCard } from "./components/AuthFormCard"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import type { LoginType } from "../../services/api/types"
import { authServices } from "../../services/api/authServices"
import { toast } from "react-toastify"
import { Button } from "../../shared/components/Button/Button"

export function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleLogin = async(event: React.SubmitEvent<HTMLFormElement>) => {

        event.preventDefault();

        setErrorMessage(null);
        setIsLoading(true);

        try {

            const credentials: LoginType = { email:email, password: password }

            const response = await authServices.login(credentials);
            
            toast.success('Login successfull..')

            navigate({ to: '/dashboard' })

        } catch (error: any) {
            const serverMessage = error.response?.data?.message || 'Authentication failed. Please try again.'
            setErrorMessage(Array.isArray(serverMessage) ? serverMessage[0] : serverMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className={styles.loginPage}>
            <LeftSection/>
            <section className={styles.rightSection}>
                <AuthFormCard footerText="No Account?" footerLink="Sign Up">
                    <h1 className={styles.welcomeText}>Welcome back</h1>
                    <p className={styles.subTitle}>Log in to manage your links.</p>

                    <form className={styles.loginForm} onSubmit={handleLogin}>
                        <label htmlFor="email">
                            <span className={styles.emailLabel}>Email</span>
                            <input type="email" id="email" className={styles.inputBar} placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </label>
                        <label htmlFor="password">
                            <span className={styles.passwordLabel}>
                                <span>Password</span>
                                <a href="" className={styles.forgetLink}>Forgot?</a>
                            </span>
                            <input type="password" id="password" className={styles.inputBar} placeholder="· · · · · · · ·" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </label>
                        <Button className={styles.loginBtn}>
                            Log in 
                            <ArrowRight size={16}/>
                        </Button>
                        <p className={styles.cardFooter}>secured · no tracking</p>
                    </form>
                </AuthFormCard>
            </section>
        </div>
    )

}