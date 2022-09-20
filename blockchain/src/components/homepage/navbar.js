import React from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
import { navItems } from "./Navitems";


const Navbar = () => {
    
    return(
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">APPPPP</Link>
                <ul>
                    {navItems.map((item) =>{
                        return(
                        <li key={item.id} className={item.cName}>
                            <Link to="{item.path}">{item.title}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </>
        
    )
}

export default Navbar