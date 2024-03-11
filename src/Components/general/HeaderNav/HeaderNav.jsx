import React from 'react'
import "./HeaderNav.css"
import HomeIcon from '../assets/HomeIcon'
import SearchIcon from '../assets/SearchIcon'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

function HeaderNav() {
    const cookies = new Cookies();

    return (
        <header className='header'>
            <nav>
                <ul>
                    <li className='header_li'>
                        <Link to='/'>

                            <HomeIcon/>
                            <p>INICIO</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/search'>

                            <SearchIcon/>
                            <p>BÚSQUEDA</p>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={()=>{
                            cookies.remove("user");
                        }}
                        to={"/login"}
                        >
                            <p>SALIR</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav