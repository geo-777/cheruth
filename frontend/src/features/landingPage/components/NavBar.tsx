import { CheruthLogo } from "../../../components/CheruthLogo"
import styles from "./NavBar.module.css"

export function NavBar() {

    return(
        <nav>
            <CheruthLogo />
            <div className={styles['nav-links']}>
            <a className={styles['nav-link-item']} href="#features">
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