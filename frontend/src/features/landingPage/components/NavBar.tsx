import { Link2 } from "lucide-react"
import styles from "./NavBar.module.css"

export function NavBar() {

    return(
        <nav>
            <div className={styles['nav-logo']}>
            <span>
                <Link2 size={15} strokeWidth={1.75} />{" "}
            </span>{" "}
            <p>cheruth</p>
            </div>
            <div className={styles['nav-links']}>
            <a className={styles['nav-link-item']} href="">
                Features
            </a>
            <a className={styles['nav-link-item']} href="">
                Self-host
            </a>
            <a className={styles['nav-link-item']} href="">
                Docs
            </a>
            </div>
            <div className={styles['nav-action-btns']}>
            <button className={`${styles['secondary-btn']} ${styles.btn}`}>Login</button>
            <button className={`${styles['primary-btn']} ${styles.btn}`}>Sign up</button>
            </div>
        </nav>
    )

}