import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'


function CartItem({id, price, img, name, quantity, category}) {
    const {removeItem} = useContext(CartContext)
    let subtotal = price * quantity

    return (
        <div className="cart_item">
            <div className="cart_detail">
                <div>
                    <small>Titulo</small>
                    <div>
                        <h4>{category} {name}</h4>
                    </div>
                </div>
                <div>
                    <small>Precio</small>
                    <div>
                        <h4>$ {price}</h4>
                    </div>
                </div>
                <div>
                    <small>Subtotal</small>
                    <div>
                        <h4>$ {subtotal}</h4>
                    </div>
                </div>
                <div>
                    <small>Cantidad</small>
                    <div>
                        <h4>{quantity}</h4>
                    </div>
                </div>
                <button onClick={() => removeItem(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;