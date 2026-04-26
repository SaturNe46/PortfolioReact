import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="headerTitle">
        <h1>Portfolio-Terry</h1>
      </div>

      <nav>
        <ul>
          <li><Link to="/" title="Home">Home</Link></li>
          <li><Link to="/resume" title="Resume">Resume</Link></li>
          <li><Link to="/projects" title="Project">Project</Link></li>
          <li><Link to="/contact" title="Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

