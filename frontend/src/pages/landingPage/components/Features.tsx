import { Key, ChartColumn, Earth, Clock, Lock, TerminalIcon, CodeXml } from "lucide-react"
import styles from "./Features.module.css"

const FEATURES = [
    {'title' : 'Custom aliases','icon' : Key,'desc' : 'Pick you own short slug --- cher.li/launch reads better than cher.li/x7k2.'},
    {'title' : 'Real Analytics','icon' : ChartColumn,'desc' : 'Clicks, unique visitors, daily history, Without selling your data.'},
    {'title' : 'Geo & device','icon' : Earth,'desc' : 'Countries, browsers, devices, refferrers. Know where the traffic comes from.'},
    {'title' : 'Expiring links','icon' : Clock,'desc' : 'Set an expiry date and the link self destructs. Perfect for promos.'},
    {'title' : 'Passsword protected','icon' : Lock,'desc' : 'Lock any link behind password for private sharing.'},
    {'title' : 'Open Source','icon' : CodeXml,'desc' : 'MIT licensed. Self-host on your infra. Read the source.'},
]

export function Features() {

    return(
        <div id="features" className={styles.features}>
            <span className={styles.mainHeading}>
                Features
            </span>
            
            <div className={styles.label}>
                <h2 className={styles.mainLabel}>Everything you need.</h2>
                <h2 className={styles.subLabel}>Nothing you don't.</h2>
            </div>

            <div className={styles.featureGrid}>
                {
                    FEATURES.map((item, index) => {
                        const IconComponent = item.icon;

                        return(
                            <div key={index} className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <IconComponent size={20}/>
                                </div>
                                <h4 className={styles.featureTitle}>{item.title}</h4>
                                <p className={styles.featureDesc}>{item.desc}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )

}