import { Link } from "@tanstack/react-router"
import { CheruthLogo } from "../../../shared/components/CheruthLogo/CheruthLogo"
import styles from "./NavBar.module.css"
import { Button } from "../../../shared/ui/Button/Button"

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
                <Button asChild>
                    <Link className={`${styles['secondary-btn']} ${styles.btn}`} to='/login'>Login</Link>
                </Button>
                <Button asChild>
                    <Link className={`${styles['primary-btn']} ${styles.btn}`} to='/register'>Sign up</Link>
                </Button>
            </div>
        </nav>
    )

}