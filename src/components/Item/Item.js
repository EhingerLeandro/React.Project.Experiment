

const Item = ({id, name, price, stock})=>{
    return(
        <article className="cardItem">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture></picture>
            <section>
                <p>precio: ${price}</p>
                <p>stock: ${stock}</p>
            </section>
        </article>
    )
}

export default Item;