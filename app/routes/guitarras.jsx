import { useLoaderData, Outlet, useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href:styles
    }
  ]
}
//  '~' para ir a la raíz del proyecto
//console.log(process.env.API_URL) VISUALIZAR VARIABLE DE ENTORNO

function Tienda() {

  return (
    <main className="contenedor">
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda

