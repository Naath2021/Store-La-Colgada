
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Cart from '../cart/Cart';
import logo from "../../assets/image/logo/logo.png"
import { Link } from "react-router-dom"
import { DropdownCategory } from '../buttons/Buttons';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to={"/"}><img src={logo} className="navbar-logo" alt="logo" /></Link>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <Link to={"products"}><DropdownCategory/></Link>
                        <Link to={"preguntas-frecuentes"}>faq</Link>
                        {/* <Link to={"contact"}>contacto</Link> */}
                    </li>
                </ul>
            </div>
            <div className='icon-container'>
                {/* <Link to={"/login"}><FontAwesomeIcon icon={faUser} /> </Link> */}
                <Cart/>
            </div>
        </div>
    );
};

export default Navbar