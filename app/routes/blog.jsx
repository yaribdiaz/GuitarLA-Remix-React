import { Outlet } from "@remix-run/react"
import styles from "~/styles/blog.css"


export function links(){ //Agregar estilos a todo blog
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Blog() {


  //console.log(posts)

  return (
    <div className="contenedor">
        <Outlet/>
    </div>
  )
}

export default Blog



