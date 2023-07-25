import './ItemStyle.css'

const Item = ({id, img, name, price, stock})=>{
    return(
        <article className="cardItem">
            <header>
                <h3>
                    {name}
                </h3>
            </header>
            <picture>
                <img src={img}/>
            </picture>
            <section>
                <p>precio: ${price}</p>
                <p>stock: ${stock}</p>
            </section>
        </article>
    )
}

export default Item;