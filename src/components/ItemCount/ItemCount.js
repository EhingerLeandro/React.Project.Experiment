import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity +1);
        }
    }

    const decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }

    return (
        <div className='counterName'>
            <div className='controls'>
                <button className="boton" onClick={increment}>Añadir</button>
                <h3 className='cantidad'>{quantity}</h3>
                <button className='boton' onClick={decrement}>Quitar</button>
            </div>
            <div clasName='agrega'>
                <button className="boton" onClick={()=>onAdd(quantity)} disable={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;