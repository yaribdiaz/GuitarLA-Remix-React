import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'



export function meta(){
  return{
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }
}

//  '~' para ir a la raíz del proyecto
//console.log(process.env.API_URL) VISUALIZAR VARIABLE DE ENTORNO
export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data //especificar que categoria para retornar
  //PARA ACCEDER A LOADER HAY QUE UTILIZAR USELOADERDATA
}

function Tienda() {
  const guitarras  = useLoaderData()

  return (

    <ListadoGuitarras
    guitarras ={guitarras}
    />

  )
}

export default Tienda

