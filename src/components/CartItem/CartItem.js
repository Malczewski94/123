import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function CartItem({id, price, img, title, quantity, category}) {
    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <img src={img} />

            <div>
                <div>
                    <small>Titulo</small>
                    <div>
                        <h4>{category} {title}</h4>
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
                        <h4>$ {price * quantity}</h4>
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