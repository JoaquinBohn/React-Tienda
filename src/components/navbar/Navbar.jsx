import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = ()=>{

    return (
        <ul>

            <Link to="/">
                <li>Todos</li>
            </Link>

            <Link to="/category/novelas">
                <li>Novelas</li>
            </Link>

            <Link to="/category/cuentos">
                <li>Cuentos</li>
            </Link>
            
            <Link to="/category/academicos">
                <li>Academicos</li>
            </Link>

            <Link to="/category/infantiles">
                <li>Infantiles</li>
            </Link>

        </ul>
    )

}

export default Navbar