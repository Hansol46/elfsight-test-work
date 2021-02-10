import React from 'react'

function NavBar() {
    return (
        <nav >
            <div className='navigation'>
                <a href='#' className='brandLogo'> Logo </a>
                <ul>
                    <li> <a href='#'> Новости </a> </li>
                    <li> <a href='#'> О нас </a> </li>
                    <li> <a href='#'> Партнеры </a> </li>
                </ul>
            
            </div>
        </nav>
    )
}

export default NavBar
