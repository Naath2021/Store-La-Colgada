import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

const SeeProduct = () => <Link to={"/products"} tyle={{ textDecoration: "none", listStyleType: "none", listStyle: "none", color: "rgb(34, 34, 34)" }}><Button className='see-products'>Ver Productos</Button></Link>

const SendForm = () => <Button className='send-form'>Enviar</Button>

const AddToCart = () =>
    <Button className='add-to-cart' animated='vertical'>
        <Button.Content hidden>Agregar al carrito</Button.Content>
        <Button.Content visible>
            <Icon name='shop' />
        </Button.Content>
    </Button>

export { SeeProduct, SendForm, AddToCart }