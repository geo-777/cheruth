import { Link } from "@tanstack/react-router";
import { CheruthLogo } from "../../../shared/components/CheruthLogo/CheruthLogo";
import styles from "./Navbar.module.css"
import { Button } from "../../../shared/ui/Button/Button";
import { LogoutButton } from "./LogoutButton";
import { LogOut, Plus } from "lucide-react";



export function NavBar() {

    return(
        <div className={styles.navBar}>
            <div>
                <CheruthLogo />{" | "}
                <Link to='/dashboard' className={`${styles.navLinks} ${styles.firstLink}`} activeProps={{className: styles.activeLink}}>Dashboard</Link>
                <Link to='/links' className={styles.navLinks} activeProps={{className: styles.activeLink}}>Links</Link>
            </div>
            <div>
                <Button><Plus size={16}/>New</Button>
                <LogoutButton />
            </div>
        </div>
    );

}