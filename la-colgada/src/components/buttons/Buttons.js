import { Link } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Button, DropdownItem } from 'semantic-ui-react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SeeProduct = () => <Link to={"/products"} tyle={{ textDecoration: "none", listStyleType: "none", listStyle: "none", color: "rgb(34, 34, 34)" }}><Button type="submit" className='see-products'>Ver Productos</Button></Link>

const SendForm = () => <Button className='send-form'>Enviar</Button>

const AddToCart = () =>
    <Link to="../cart">
        <Button className='add-to-cart' animated='vertical'>
            <Button.Content hidden className='btn-content'>Agregar al carrito</Button.Content>
            <Button.Content visible>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Button.Content>
        </Button>
    </Link>


function DropdownCategory() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="dropdown-container">
                Productos
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <DropdownItem><Link to={"products/category/macetas"} replace>macetas</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/platos"} replace>platos</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/combos"} replace>combos</Link></DropdownItem>
                <DropdownItem><Link to={"products"}>ver todos</Link></DropdownItem>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export { SeeProduct, SendForm, AddToCart, DropdownCategory }