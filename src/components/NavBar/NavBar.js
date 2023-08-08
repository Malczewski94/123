import logo from "./Vault-Tec_Logo.svg (1).png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="category">
                <div>
                  <NavLink to={"/category/bebida"} className={({isActive})=> isActive ? "ActiveOption" : "Option" }>Bebidas</NavLink>
                </div>
                <div>
                  <NavLink to={"/category/revista"} className={({isActive})=> isActive ? "ActiveOption" : "Option" }>Revistas</NavLink>
                </div>
                <div>
                  <NavLink to={"/category/otros"} className={({isActive})=> isActive ? "ActiveOption" : "Option" }>Otros</NavLink>
                </div>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar
