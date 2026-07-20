import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "./InputField.module.css"


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
    label : string;
    error? : string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({label, error, id, className = "" , ...props}, ref) => {
        return(
            <div className={styles.container}>
                <div className={styles.labelRow}>
                    <label htmlFor={id}>
                        {label}
                    </label>
                    
                    {error && <span className={styles.error}>{error}</span>}
                </div>

                <input 
                    ref={ref}
                    id={id}
                    prefix="Hello"
                    className={`${styles.input} ${
                        error ? styles.inputError : ""
                    } ${className}`}
                    {...props}
                />
            </div>
        );
    }
);

InputField.displayName = "InputField";