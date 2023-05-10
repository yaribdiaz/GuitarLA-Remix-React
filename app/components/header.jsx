import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

function Header() {

  return (
    <header className='header'>
      <div className="contenedor barra">
        <div className="logo">
          <img src={logo} alt="logo" className="logo"/>
        </div>

        <Navegacion/>
      </div>
    </header>
  )
}

export default Header

