import { useLoaderData } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"
import { getPost} from "~/models/post.server"

export function meta({data}){
  // 'data' trae la información para META
if(!data){
  return{
    title: 'GuitarLA - Entrada no encontrada',
    description: 'Guitarras, Venta de Guitarras - Entrada no encontrada'
  }
}
return{
  title: `GuitarLA - ${data?.data[0]?.attributes.titulo}`,
    description: 'Guitarras, Venta de Guitarras - ${data?.data[0]?.attributes.titulo'
}
}

export async function loader({params}){ //'params' PARA LEER LA URL

    const { postUrl} = params 
    //poner el nombre del mismo archivo "postsUrl" para extraer url
    const post = await getPost(postUrl)
    if(post.data.length === 0){
      throw new Response ('', {
        status: 404,
        statusText: 'Entrada no encontrada'
      })
    }
    
  return post
}

export default function Post() {

  const post = useLoaderData()

  const {titulo, contenido, imagen, publishedAt} =post?.data[0].attributes
  
  return (
    <article className="contenedor post mt-3">
      <img className="imagen" src={imagen?.data.attributes.url} alt={`Blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}
