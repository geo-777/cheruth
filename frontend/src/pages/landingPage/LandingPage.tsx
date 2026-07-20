import { useState } from "react";
import { Features } from "./components/Features";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { SelfHost } from "./components/SelfHost";

import styles from "./LandingPage.module.css"

const LandingPage = () => {
  
  const [ shortenedUrl,  setShortenedUrl] = useState<string|null>('');

  const onUrlShortened = (url: string | null) => setShortenedUrl(url); 

  return (
    <div className={`${styles['landing-main']} grid-bg`}>
      <NavBar />
      <HeroSection 
        shortenedUrl={shortenedUrl}
        onUrlShortened={onUrlShortened}
      />
      <Features />
      <SelfHost />
    </div>
  );
};

export default LandingPage;
