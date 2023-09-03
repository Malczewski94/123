import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className="detail">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section className="description">
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: $ {price}</p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'><button className="buttoncart">Terminar compra</button></Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;