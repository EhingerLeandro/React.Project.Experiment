const products=[
    {id:1, name:'Tablet Timbell', img:'#', price:900, stock:20, category:'tablet', description:'Tablet ASUS 5"'},
    {id:2, name:'Smartphone Crion', img:'#', price:600, stock:20, category:'smartphone', description:'Smartphone Samsung 3"'},
    {id:3, name:'Laptop Raizen', img:'#', price:1800, stock:20, category:'laptop', description:'Laptop ACER RAM 16GB'}
];

export const getProducts = ( ) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productID)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve( products.find(prod=>prod.id === productID))
        }, 1000)
    })
}

