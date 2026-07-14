import { Check, ChevronRight, DollarSign, Star, Terminal } from "lucide-react"
import { TerminalWindow } from "../../../shared/components/TerminalWindow/Terminal"
import styles from "./SelfHost.module.css"
import { Button } from "../../../shared/components/Button/Button"


export function SelfHost() {

    return(
        <div className={styles.selfHostGrid} id="selfHost">
            <section className={styles.mainContent}>
                <h3 className={styles.sectionHeading}>Self-host</h3>
                <h2 className={styles.desc}>Yours. On your domain.</h2>
                <p>Three commands and you're running cheruth on your own server. Bring your own domain, your own database, your own data.</p>
                
                <ul className={styles.checkList}>
                    <li><Check size={18}/>{" "}One-click deploy to Docker, Fly, Railway</li>
                    <li><Check size={18}/>{" "}Postgres or SQLite, your call</li>
                    <li><Check size={18}/>{" "}No telemetry. No tracking. Ever.</li>
                </ul>
                <Button className={styles.githubBtn} onClick={() => window.open('https://github.com/geo-777/cheruth', '_blank')}>
                    Star us on Github{" "}<Star/>
                </Button>
            </section>
            <TerminalWindow canFloat={true}>
                <div className={styles.header}><Terminal size={18}/>{" "}<span>~/cheruth</span><span><i className="fa-solid fa-circle"></i><i className="fa-solid fa-circle"></i><i className="fa-solid fa-circle"></i></span></div>
                <div className={styles.code}>
                    <span># clone & run</span>
                    <p><DollarSign size={12}/>{" "}git clone github.com/cheruth/cheruth </p>
                    <p><DollarSign size={12}/>{" "}cd cheruth</p>
                    <p><DollarSign size={12}/>{" "}docker compose up -d</p>
                    <span className={styles.footer}><ChevronRight size={16}/>ready on http://localhost:3000</span>
                </div>
            </TerminalWindow>

        </div>
    )

}

