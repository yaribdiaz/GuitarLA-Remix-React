import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return(
    {
      title: 'GuitarLA - Nosotros',
      description:'Venta de guitarras, blog de música'
    }
  )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      // PRECARGAR IMAGEN O ARCHIVO PESADO AL MOMENTO DE CARGAR LA PÁGINA
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}



function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className='contenido'>
          <img src={imagen} alt="nosotros" />

          <div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed, nobis deserunt dolorem sunt, asperiores recusandae
            quasi distinctio labore nesciunt earum ratione facere
            voluptatibus, cum ab numquam! Dignissimos quas debitis 
            cupiditate.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, omnis. Veniam quis quidem velit non id,
            magni minus, similique, at vero facilis voluptatibus illo.
            Quisquam incidunt suscipit eos maiores iste.
            </p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros

