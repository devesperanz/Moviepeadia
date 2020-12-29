import React from 'react'

function Nav() {
    return (
       <div className='nav'>
            <nav className='navbar'>
                <div className='navbar-body'>
                        <a href='!#' className='navbar-brand'>MOVIEPEDIA</a>
                        <div className="search-container">
                            <i className="fa fa-search search-icon"></i>
                            <input className="search-box" type="search" name="search" />  
                        </div>
                </div>
            </nav>            
       </div>
    )
}

export default Nav
