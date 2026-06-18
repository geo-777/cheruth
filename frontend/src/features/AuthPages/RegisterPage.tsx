import styles from "./RegisterPage.module.css"
import { LeftSection } from "./components/LeftSection"
import { AuthFormCard } from "./components/AuthFormCard"
import { ArrowRight, Loader } from "lucide-react"
import { useState } from "react"
import { authServices } from "../../api/authServices"
import type { RegisterType } from "../../api/types"
import { useNavigate } from "@tanstack/react-router"
import { toast } from "react-toastify"

export function RegisterPage () {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleRegister = async(event: React.SubmitEvent<HTMLFormElement>) => {

        event.preventDefault();

        setErrorMessage(null);
        setIsLoading(true);


        try {
            const credentials: RegisterType = { username:name, email:email, password:password };

            await authServices.register(credentials);

            toast.success('Register successfull..');

            navigate({ to:'/login' })
        } catch (error: any) {
            const serverMessage = error.response?.data?.message || 'Authentication failed. Please try again.'
            setErrorMessage(Array.isArray(serverMessage) ? serverMessage[0] : serverMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
            console.log(errorMessage);
        }

    }

    return(
        <div className={styles.registerPage}>
            <LeftSection/>
            <section className={styles.rightSection}>
                <AuthFormCard footerText="Already have an account?" footerLink="Log In">
                    <h1 className={styles.welcomeText}>Create your account</h1>
                    <p className={styles.subTitle}>Start shortening links in seconds.</p>

                    <form className={styles.registerForm} onSubmit={handleRegister}>
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
                        <button className={styles.registerBtn} type="submit">
                            {isLoading ? (<>Submitting... <Loader size={16} className={styles.spinner}/></>) : (<>Create Account <ArrowRight size={16}/></>)}
                        </button>
                        <p className={styles.cardFooter}>no credit card · free forever</p>
                    </form>
                </AuthFormCard>
            </section>
        </div>
    )
}