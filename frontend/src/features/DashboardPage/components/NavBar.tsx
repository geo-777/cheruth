import { Link } from "@tanstack/react-router";
import { CheruthLogo } from "../../../components/CheruthLogo/CheruthLogo";
import styles from "./Navbar.module.css"
import { Button } from "../../../components/Button/Button";
import { Plus } from "lucide-react";


export function NavBar() {
    return(
        <div className={styles.navBar}>
            <div>
                <CheruthLogo />
                <Link to='/dashboard' className={styles.firstLink}>Dashboard</Link>
                <Link>Links</Link>
            </div>
            <div>
                <Button><Plus size={16}/>New</Button>
            </div>
        </div>
    );

}