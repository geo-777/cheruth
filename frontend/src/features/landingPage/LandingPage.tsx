import { Features } from "./components/Features";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { SelfHost } from "./components/SelfHost";

import styles from "./LandingPage.module.css"

const LandingPage = () => {

  return (
    <div className={`${styles['landing-main']} ${styles['grid-bg']}`}>
      <NavBar />
      <HeroSection />
      <Features />
      <SelfHost />
    </div>
  );
};

export default LandingPage;
