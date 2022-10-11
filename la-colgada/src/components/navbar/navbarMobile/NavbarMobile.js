
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleQuestion, faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Cart from '../../cart/Cart';

function NavbarMobile() {


    return (
        <div className="mobile-icons-container">
            <Link className='link-router mobile-icons' to={"/"}><FontAwesomeIcon icon={faHouse} /></Link>
            <Link className='link-router mobile-icons' to={"preguntas-frecuentes"}><FontAwesomeIcon icon={faCircleQuestion} /></Link>
            <Link className='link-router mobile-icons' to={"products"}><FontAwesomeIcon icon={faHandSparkles} /></Link>
            <Cart />
        </div>
    );
}


export default NavbarMobile