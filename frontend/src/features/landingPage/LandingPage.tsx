import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";

import styles from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={`${styles['landing-main']} ${styles['grid-bg']}`}>
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
