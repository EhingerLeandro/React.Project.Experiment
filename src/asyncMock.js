const products=[
    {id:1, name:'Tablet Timbell', price:900, stock:20, category:'tablet', description:'Tablet ASUS 5"'},
    {id:2, name:'Smartphone Crion', price:600, stock:20, category:'smartphone', description:'Smartphone Samsung 3"'},
    {id:3, name:'Laptop Raizen', price:1800, stock:20, category:'laptop', description:'Laptop ACER RAM 16GB'}
];

export const getProducts = ( ) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

