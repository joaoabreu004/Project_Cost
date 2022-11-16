import { Link } from 'react-router-dom'
import Container from '../Container'
import styles from './NavBar.css'
import logo from '../../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className='navBar'>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Costs' />
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default NavBar