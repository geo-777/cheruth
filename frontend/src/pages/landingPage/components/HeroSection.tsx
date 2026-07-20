import { Zap, ArrowRight, Link2, Check } from "lucide-react"
import styles from "./HeroSection.module.css"
import React, { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
export function HeroSection() {

    const [url, setUrl] = useState(localStorage.getItem('pendingUrl') || '');

    const handleUrlSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if(!url) return;

        localStorage.setItem('pendingUrl', url)
    };

    return(
        <div className={styles.heroContainer}>
            <Button asChild>
                <a href="https://www.github.com/geo-777/cheruth" target="_blank" rel="noopener noreferrer" className={styles.pill}>
                    <Zap size={12}/>
                    v1.0 is live — now open source
                    <ArrowRight size={12}/>
                </a>
            </Button>
            
            <h1 className={styles.mainHeading}>cheruth</h1>
            <p className={styles.subHeading}>Small links. Simple.</p>
            <p className={styles.bodyDescription}>
                The open-source URL shortener with proper analytics. Self-host it in minutes, or run it on us.
            </p>

            <form onSubmit={handleUrlSubmit} className={styles.searchForm}>
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
                <Button type="submit" className={styles.shortenBtn}>
                    Shorten <ArrowRight size={12}/>
                </Button>
            </form>

            {url &&
                <div className={styles.resultCard}>
                    <span className={styles.resultUrlWrapper}>
                        <Check size={24}/>
                        Login to get the shortened link for {url.replace("https://", "")}
                    </span>
                </div>   
            }

            <div className={styles.microFooterText}>
                Free forever · MIT licensed
            </div>
        </div>
    )

}