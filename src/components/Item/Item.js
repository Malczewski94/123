import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="cart">
            <header>
                <h2>{name} </h2>
            </header>
            <picture>
                <img className="frontpage" src={img} alt={name}  />
            </picture>
             <section>
                <p>Precio: ${price} </p>
                <p>Stock disponible: {stock} </p>
            </section>
            <footer className="footercart">
                <Link to={`/item/${id}`} >Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;
