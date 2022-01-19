import React from "react"
import { Link } from 'react-router-dom'
import './style.css'


function HomePage() {
    



    return (<React.Fragment>
        <main className='main__container'>
        <h2 className='welcome__message'>Welcome to the metaverse</h2>
        <Link to={'/Characterlist'}><img alt='welcome' src='https://c.tenor.com/62lfdCxfIjkAAAAi/dancing-happy.gif' className='dancing__rick'></img></Link>
        </main>

    </React.Fragment>

    )
}

export default HomePage;