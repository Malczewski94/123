import cart from './assets/carrito-de-compras.png';
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className='cartwidget'>
            <img className='img' src={cart} alt='carrito-de-compras'/>
            <p>0</p>
        </div>
    );
}

export default CartWidget