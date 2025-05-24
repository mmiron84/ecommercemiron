import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import {db} from "../../services/config"
import { collection,addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'



const checkout = () => {
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailconfirmacion,setEmailconfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    const {carrito, vaciarCarrito,total,totalCantidad} = useContext(CarritoContext)

      const manejadorFormulario = (e)=>{
            e.preventDefault()

            if(!nombre|| !apellido ||!telefono ||!email||!emailconfirmacion){
                  setError("Por favor completa todos los datos del formulario")
                  return
            }
            if(email!== emailconfirmacion){
                  setError("Los campos de email no coinciden, asegurate de que sean correctos")
                  return
            }
            const orden={
                  items: carrito.map(producto => ({
                        id: producto.item.id,
                        nombre: producto.item.nombre,
                        cantidad: producto.cantidad
                  })),
                  total: total,
                  fecha: new Date(),
                  nombre,
                  apellido,
                  telefono,
                  email     
            }

            Promise.all(
                  orden.items.map(async (productoOrden)=>{
                        const productoRef = doc(db,"productos",productoOrden.id)
                        const productoDoc = await getDoc(productoRef)
                        const stockActual = productoDoc.data().stock

                        await updateDoc(productoRef, {
                              stock: stockActual - productoOrden.cantidad
                        })
                  })
            )
            .then (()=>{
                  
                              addDoc(collection(db,"ordenes"),orden)
                              .then(docRef =>{
                                    setOrdenId(docRef.id)
                                    vaciarCarrito()
                              })
                              .catch(error=>{
                                    console.log("error al crear orden, itente de nuevo")
                                    setError("error al crear orden, itente de nuevo")
                              })

            })
            .catch((error)=>{
                  console.log("no se pudo actaulizar los datos",error)
                  setError("no se puede actualizar el stock")
            })



      }



  return (
    <div className='contenedor-formulario'>
      <h2> checkout</h2>

      <form onSubmit={manejadorFormulario}>
        {
            carrito.map(producto => (
                  <div key = {producto.item.id}>
                        <p>{producto.item.nombre}x{producto.cantidad}</p>
                        <p>{producto.item.precio}</p>
                  </div>
            ))
                
        }

      
      <div>
            <label htmlFor="">Nombre</label>
            <input type="text"onChange={(e)=>setNombre(e.target.value)}/>
      </div>
      <div>
            <label htmlFor="">Apellido</label>
            <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
      </div>
      <div>
            <label htmlFor="">Telefono</label>
            <input type="text" onChange={(e)=>setTelefono(e.target.value)}/>
      </div>
      <div>
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
            <label htmlFor="">Email Confirmacion</label>
            <input type="email" onChange={(e)=>setEmailconfirmacion(e.target.value)}/>
      </div>
      {
            error && <p style={{color: "red"}}>{error}</p>
      }
            <button type='submit'>confirmar compra</button>
      {
            ordenId &&  <strong>gracias por comprar en nuestro sitio. Numero de orden:{ordenId}</strong>
      }
       </form>
    </div>
   
  )
}

export default checkout
