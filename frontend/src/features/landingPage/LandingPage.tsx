import { Link2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="landing-main">
      <nav>
        <div className="nav-logo">
          <span>
            <Link2 size={15} strokeWidth={1.75} />{" "}
          </span>{" "}
          <p>cheruth</p>
        </div>
        <div className="nav-links">
          <a className="nav-link-item" href="">
            Features
          </a>
          <a className="nav-link-item" href="">
            Self-host
          </a>
          <a className="nav-link-item" href="">
            Docs
          </a>
        </div>
        <div className="nav-action-btns">
          <button className="secondary-btn btn">Login</button>
          <button className="primary-btn btn">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
