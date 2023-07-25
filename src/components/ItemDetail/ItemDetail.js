import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css'

const ItemDetail = ({id, name, img, price, stock, category, description})=>{
    return(
        <article className='detailCard'>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={img}/>
            </picture>
            <section>
            
                <p>Id: {id}</p>
                <p>Category: {category}</p>
                <p>Description: {description}</p>
                <p>Stock: {stock}</p>
                <p>Price: {price}</p>
            </section>
            <footer>
                <ItemCount initial={1} stock ={stock} onAdd={(quantity)=>console.log(quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail