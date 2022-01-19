import React from "react"
import { Link } from "react-router-dom"
import portal from '../../assets/imgs/portal.gif'
import './style.css'

function HomePortal() {

    return (<React.Fragment>
            <Link to='/' className='to-home__link'>
                <img alt='to home ' src={portal} className='to-home__button'></img>
                <span>Back to home</span>
            </Link>
    </React.Fragment>

    )
}

export default HomePortal