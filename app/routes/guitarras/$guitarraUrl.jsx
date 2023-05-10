//AL TENER EL SIGNO DE '$' AL PRINCIPIO LO HACE RUTA DINÁMICA
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import { getGuitarra } from "~/models/guitarras.server.js" 


export async function loader({params}){
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText:'Guitarra No Encontrada'
        })
    }

    return guitarra
}

export function meta({data}){ //'data' viene del LOADER, cuando está loader el 'data' está disponible
    //console.log(data.data) El primer data es de Remix el segundo Strapi
    if(!data){
        return{
            title:'GuitarLA - Guitarra No Encontrada',
            description: `Venta de guitarras - Guitarra no encontrada`
        }
    }
    
    return{
        title:`GuitarLA - ${data.data[0].attributes.nombre}`,
        description:`Venta de guitarras - Guitarra ${data.data[0].attributes.nombre}`
    }
}



function Guitarra() {

    const {agregarCarrito} = useOutletContext() //Ó  const {agregarCarrito} = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio, id } = guitarra.data[0].attributes


    const handleSubmit = e =>{
        e.preventDefault()

        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return //para no ejecutar lo siguiente
        }
        
        const guitarraSeleccionada = {
            id:guitarra.data[0].id,
            imagen:imagen.data.attributes.formats.small.url,
            nombre,
            precio,
            cantidad
        }
        //console.log(guitarraSeleccionada)
        agregarCarrito(guitarraSeleccionada)
    }

  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.url} alt={`Guitarra ${nombre}`} className="imagen" />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion}</p>
            <p className="precio">${precio}</p>

            <form onSubmit={handleSubmit} className='formulario'>

                <label htmlFor="cantidad">Cantidad</label>
                <select 
                    id="cantidad"
                    onChange={e =>setCantidad(parseInt(e.target.value))}//parseInt para convertir a número y no en string
                >
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" value="Agregar al Carrito"/>
            </form>

        </div>
    </div>
  )
}

export default Guitarra
