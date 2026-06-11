import { Zap, ArrowRight, Link2, Check } from "lucide-react"
import styles from "./HeroSection.module.css"
import React, { useState } from "react";

interface HeroSectionProps {
    onUrlShortened: (url: string | null) => void;
    shortenedUrl: string | null;
}

export function HeroSection({ onUrlShortened, shortenedUrl }: HeroSectionProps) {

    const [url, setUrl] = useState('');

    const handleUrlSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if(!url) return;

        const randomUrl = Math.random().toString(36).slice(2,7);
        // onUrlShortened(`cher.li/${randomUrl}`);
        shortenedUrl = `cher.li/${randomUrl}`;
    };

    return(
        <div className={styles.heroContainer}>
            <a href="github.com/geo-777/cheruth"  className={styles.pill}>
                <Zap size={12}/>
                v1.0 is live — now open source
                <ArrowRight size={12}/>
            </a>
            
            <h1 className={styles.mainHeading}>cheruth</h1>
            <p className={styles.subHeading}>Small links. Simple.</p>
            <p className={styles.bodyDescription}>
                The open-source URL shortener with proper analytics. Self-host it in minutes, or run it on us.
            </p>

            <form className={styles.searchForm}>
                <div className={styles.inputWrapper}>
                    <Link2 size={18} className={styles.inputIcon}/>
                    <input 
                    type="url"
                    value={url}
                    onChange={(input) => setUrl(input.target.value)}
                    placeholder="Paste in your URL here" 
                    className={styles.urlInput}
                    required
                    />
                </div>
                <button type="submit" onSubmit={handleUrlSubmit} className={styles.shortenBtn}>
                    Shorten <ArrowRight size={12}/>
                </button>
            </form>

            {shortenedUrl &&
                <div className={styles.resultCard}>
                    <span className={styles.resultUrlWrapper}>
                        <Check size={24}/>
                        {shortenedUrl}
                    </span>
                    <button className={styles.copyBtn}>
                        Copy
                    </button>
                </div>   
            }

            <div className={styles.microFooterText}>
                Free forever · MIT licensed
            </div>
        </div>
    )

}