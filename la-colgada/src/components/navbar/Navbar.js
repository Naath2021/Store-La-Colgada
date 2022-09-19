
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from '../cart/CartWidget';
import { emptyCartAlert } from '../cart/CartWidget';
import logo from "../../assets/image/logo/logo.png"
import { Link } from "react-router-dom"
import Cart from '../cart/Cart';
import { DropdownCategory } from '../buttons/Buttons';
// import DropdownProduct from '../dropdown/DropdownCategory';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to={"/"}><img src={logo} className="navbar-logo" alt="logo" /></Link>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <Link to={"/products"}><DropdownCategory/></Link>
                        <Link to={"/FAQ"}>faq</Link>
                        <Link to={"/contact"}>contacto</Link>
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