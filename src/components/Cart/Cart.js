import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="resume">
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div>
                <h3>Total: $ {parseFloat(totalPrice()).toFixed()}</h3>
            </div>
            <div className="button">
                <button className="buttoncart" onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to='/checkout'>
                    <button className="buttoncart">Checkout</button>
                </Link>
            </div>
        </div>
    )

}

export default Cart;