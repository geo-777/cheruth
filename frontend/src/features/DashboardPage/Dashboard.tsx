import { NavBar } from "./components/NavBar";
import styles from "./Dashboard.module.css"

export function Dashboard() {
    return(
        <div className={`${styles.dashboard} grid-bg`}>
            <NavBar />
        </div>
    );
}