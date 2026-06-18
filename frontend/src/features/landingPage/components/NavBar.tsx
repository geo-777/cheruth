import { Link } from "@tanstack/react-router"
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
            <a className={styles['nav-link-item']} href="#selfHost">
                Self-host
            </a>
            <a className={styles['nav-link-item']} href="https://github.com/geo-777/cheruth" target="_blank" rel="noopener noreferrer">
                Docs
            </a>
            </div>
            <div className={styles['nav-action-btns']}>
            <Link className={`${styles['secondary-btn']} ${styles.btn}`} to='/login'>Login</Link>
            <Link className={`${styles['primary-btn']} ${styles.btn}`} to='/register'>Sign up</Link>
            </div>
        </nav>
    )

}