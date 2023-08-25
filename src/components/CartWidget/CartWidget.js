import { useContext } from 'react';
import cart from './assets/carrito-de-compras.png';
import "./CartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='./cart' className='cartwidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}} >
            <img className='img' src={cart} alt='carrito-de-compras'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget;