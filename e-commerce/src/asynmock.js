const misProductos =[
    {id:"1", nombre:"Bloque de Agua", stock:10, precio:400, img:"/img/bloqueagua.jpg",idCat:"original"},
    {id:"2", nombre:"Alma Soprano Ice", precio:15000,stock:5, img:"/img/almaIce.png",idCat:"original"},
    {id:"3", nombre:"Peltier", precio:500,stock:9, img:"/img/peltier1.jpg",idCat:"noOriginal"},
    {id:"4", nombre:"Tapas Laterales s",stock:7, precio:400, img:"/img/tapas.jpg",idCat:"noOriginal"},
    {id:"5", nombre:"Alma Soprano Titanium",stock:7, precio:25000, img:"/img/almaTitanium.png",idCat:"original"},
    {id:"6", nombre:"Tapas Laterales Adss",stock:7, precio:400, img:"/img/carcasaAdss.png",idCat:"noOriginal"},
    {id:"7", nombre:"Cabezal Completo",stock:7, precio:23000, img:"/img/cabezal.jpg",idCat:"original"}
    
]

 export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
 }

 export const getunProducto = (id)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=>item.id ===id)
            resolve(producto)
        })
    },2000)

 }

 export const  getProductosPorCategoria = (idCategoria)=>{
    return new Promise (resolve=>{
        setTimeout(()=>{
                const productosCategoria= misProductos.filter(item=>item.idCat===idCategoria)
                resolve(productosCategoria)
        },100)
      
    })
 }
 