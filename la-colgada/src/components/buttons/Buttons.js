import { Link } from 'react-router-dom'
import { DropdownItem, Button } from 'semantic-ui-react'
import Dropdown from 'react-bootstrap/Dropdown';

const SeeProduct = () => <Link to={"../products"}><Button type="submit" className='see-products link-router'>Ver Productos</Button></Link>

const SendForm = () => <Button type='submit' className='send-form'>Enviar</Button>

function DropdownCategory() {
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="link-router" variant="link">
                Productos
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdown-menu'>
                <DropdownItem><Link to={"products/category/macetas"} >macetas</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/utensilios"} >utensilios</Link></DropdownItem>
                <DropdownItem><Link to={"products/category/combos"} >combos</Link></DropdownItem>
                <DropdownItem><Link to={"products"}>ver más</Link></DropdownItem>
            </Dropdown.Menu>
        </Dropdown>
    );
}

const btnOrderCheckout = <Link to={"../checkout"}><Button type="submit" className='link-router checkout-btn' variant="link">iniciar compra</Button></Link>

export { SeeProduct, SendForm, DropdownCategory, btnOrderCheckout }