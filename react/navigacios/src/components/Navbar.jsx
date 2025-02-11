import React from "react";
import { useState } from "react";
import { Link,Navlink } from "react-router-dom";
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
                <Navlink to = "/About">Rólunk</Navlink>
            </li>
            <li>
                <Navlink to = "/Services">Szolgáltatások</Navlink>
            </li>
            <li>
                <Navlink to = "/Contact">Kapcsolat</Navlink>
            </li>
 
        </ul>
       
        </nav>
    )
}