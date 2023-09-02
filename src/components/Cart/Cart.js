import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'


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
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: $ {parseFloat(totalPrice()).toFixed()}</h3>
            <button onClick={() => clearCart()}>Limpiar carrito</button>
            <Link to='/checkout'>
                <button>Checkout</button>
            </Link>
        </div>
    )

}

export default Cart;