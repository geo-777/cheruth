import styles from "./LeftSection.module.css"
import { CheruthLogo } from "../../../shared/components/CheruthLogo/CheruthLogo"
import { Check, ArrowRight } from "lucide-react"

export function LeftSection() {

    return(
        <section className={styles.leftSection}>
            <CheruthLogo />
            <div className={styles.leftSectionContent}>
                <h2 className={styles.leftLabels}>
                    <span>Small links.</span>
                    <span>Simple.</span>
                </h2>
                <p className={styles.subText}>The open-source URL shortener with proper analytics. Self-host it in minutes, or run it on us.</p>
                <ul className={styles.listPoints}>
                    <li><Check size={16} color="#000000"/> Custom aliases</li>
                    <li><Check size={16} color="#000000"/> Real analytics</li>
                    <li><Check size={16} color="#000000"/> Open-source · MIT</li>
                </ul>
                <div className={styles.example}>
                    <p className={styles.exampleLink}>acme.com/2026/keynote…</p>
                    <ArrowRight size={16} color='#757575'/>
                    <p className={styles.exampleLink}>cher.li/launch</p>
                </div>
            </div>
            <div className={styles.leftSectionFooter}>
                cheruth · v1.0 · MIT
            </div>
        </section>
    )

}