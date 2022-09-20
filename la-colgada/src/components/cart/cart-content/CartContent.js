import Card from 'react-bootstrap/Card';
import Counter from '../../counter/Counter';
import Betty1 from "../../../assets/image/amarilla-colgante-simple.jpeg"

function CartContent() {
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Body className='cart-item-container'>
                    <Card.Img variant="top" src={Betty1} className="cart-item-img" />
                    <div className='cart-item-info'>
                        <Card.Title>"Producto 1"</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">2500</Card.Subtitle>
                        <Counter />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartContent;