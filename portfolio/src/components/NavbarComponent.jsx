import "./Navbar.css";
import sections from '../data/sections'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Kabir&lt;/&gt;</div>

      <ul className="nav-links">
        {
            sections.map((section)=>(
                <li key={section.id}>
                    <a href={`#${section.id}`}>
                        {section.label}
                    </a>
                </li>
            ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
