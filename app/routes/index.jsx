import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/models/guitarras.server" 
import { getPosts } from "~/models/post.server"
import { getCurso } from "~/models/curso.server"
import Guitarra from "~/components/guitarra"
import Curso from "~/components/curso"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"
import stylesGuitarras from "~/styles/guitarras.css"
import stylesPosts from "~/styles/blog.css"
import stylesCurso from "~/styles/curso.css"

export function meta(){

}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel:'stylesheet',
      href:stylesPosts
    },
    {
      rel:'stylesheet',
      href:stylesCurso
    }
  ]
}

export async function loader(){

  //PARA CARGAR LOS DOS AL MISMO TIEMPO PORQUE SOLO CON AWAIT TENDRÍAMOS QUE ESPERAR UNO FINALICE
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])



  return{
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {

  const {guitarras, posts, curso} = useLoaderData()
  //const posts = useLoaderData()
  //console.log(posts) console.log(guitarras)

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras = {guitarras}
        />
        
        <Curso
          curso={curso}
        />

        <ListadoPosts
          posts = {posts}
        />

      </main>
    </>
  )
}

export default Index
