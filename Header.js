import { NavLink, Link } from "react-router-dom"

const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
        </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                <ul>
                    <li><NavLink to="/" exact="true">Home</NavLink></li>
                    <li><NavLink to="/aboutMe" exact="true">About Me</NavLink></li>
                    <li><NavLink to="/proyects" exact="true">My Work</NavLink></li>
                </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
     </header>
)

export default Header