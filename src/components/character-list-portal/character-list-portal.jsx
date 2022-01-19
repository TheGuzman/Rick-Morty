import React from "react"
import { Link } from "react-router-dom"
import portal from '../../assets/imgs/portal.gif'
import './style.css'

function CharacterListPortal() {

    return (<React.Fragment>
            <Link to='/characterlist' className='to-character__list__link'>
                <img alt='to character list' src={portal} className='to-character__list__button'></img>
                <span>Back to character list</span>
            </Link>
    </React.Fragment>

    )
}

export default CharacterListPortal