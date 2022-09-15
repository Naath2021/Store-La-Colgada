
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from '../cart/CartWidget';
import { emptyCartAlert } from '../cart/CartWidget';
import logo from "../../assets/image/logo/logo.jpg"
import { Link } from "react-router-dom"
import Cart from '../cart/Cart';
// import DropdownProduct from '../dropdown/Dropdown';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to={"/"}><img src={logo} className="navbar-logo" alt="logo" /></Link>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/products"}>Productos</Link>
                        <Link to={"/FAQ"}>FAQ</Link>
                        <Link to={"/contact"}>Contacto</Link>
                    </li>
                </ul>
            </div>
            <div className='icon-container'>
                <Link to={"/login"}><FontAwesomeIcon icon={faUser} /> </Link>
                <CartWidget emptyCart={emptyCartAlert} Cart={<Cart/>}/>
            </div>
        </div>
    );
};

export default Navbar