import React from "react";
import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css"
 
export const Navbar = () =>
{
    const [menuOpen,setMenuOpen] = useState(false)
    return(
        <nav>
        <Link to = "/" className="title">Címoladl</Link>
        <div className="menu" onClick={() =>
            setMenuOpen(!menuOpen)
        }>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to = "http://localhost:3001/regiok">Régiók</NavLink>
            </li>
            <li>
                <NavLink to = "/Services">Szolgáltatások</NavLink>
            </li>
            <li>
                <NavLink to = "/Contact">Kapcsolat</NavLink>
            </li>
 
        </ul>
       
        </nav>
    )
}