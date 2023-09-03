import { useContext } from 'react';
import cart from './assets/carrito-de-compras.png';
import "./CartWidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='./cart' style={{ display: totalQuantity > 0 ? 'inline' : 'none'}} >
            <div className='cartwidget'>
                <div>
                    <img className='img' src={cart} alt='carrito-de-compras'/>
                </div>
                <div>
                    {totalQuantity}
                </div>
            </div>
        </Link>
    );
}

export default CartWidget;