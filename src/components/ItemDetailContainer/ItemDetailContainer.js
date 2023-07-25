import { useEffect, useState } from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{

    const [produ, setProdu]=useState(null);

    useEffect(()=>{
        getProductById(1).then(
            response=> setProdu(response))
            .catch(error=>console.error(error))
    },[])


    return(
        <div className='ItemDetailContiner'>
            <ItemDetail {...produ}/>
        </div>
    )
}

export default ItemDetailContainer;