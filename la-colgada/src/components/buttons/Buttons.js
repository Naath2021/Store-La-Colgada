import { Link } from 'react-router-dom'
import { Button, DropdownItem } from 'semantic-ui-react'
import Dropdown from 'react-bootstrap/Dropdown';

const SeeProduct = () => <Link to={"../products"}><Button type="submit" className='see-products link-router'>Ver Productos</Button></Link>

const SendForm = () => <Button type='submit' className='send-form'>Enviar</Button>

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

export { SeeProduct, SendForm, DropdownCategory }