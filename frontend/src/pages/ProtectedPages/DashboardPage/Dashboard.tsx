import { Analytics } from "../components/Analytics";
import styles from "./Dashboard.module.css"

export function Dashboard() {
    return(
        <div className={`${styles.dashboard} grid-bg`}>
            <Analytics/>
        </div>
    );
}