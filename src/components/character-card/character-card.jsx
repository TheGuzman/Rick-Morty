import React, { useEffect, useState } from "react"
import './style.css'
import { Link } from 'react-router-dom'





function CharacterCard(props) {
    
    let[episode, setEpisode] = useState('')

    useEffect(()=>{
        fetch(props.data?.episode[0])
        .then(r=>r.json())
        .then(d=>setEpisode(d))
    },[])
    return (
        <Link to={`/character/${props.data.id}`} className='character__anchor'><div className='character__container'>
                    <img alt ='character' src={props.data.image} className='character__img'></img>
                    <div className='character__text__container'>
                        <h2 className='character__name'>{props.data.name}</h2>
                        <ul>
                            <li className={`character__status ` + props.data.status} >{props.data.status}</li>
                            <li className='character__origin-location'> Origin location: {props.data.origin.name}</li>
                            <li className='character__current-location'> Current location: {props.data.location.name}</li>
                            <li className='character__location__tittle'>Last known location:</li>
                            <li className='character__location'>{props.data.location.name}</li>
                            <li className='character__episodio__tittle'>First seen in:</li>
                            <li className='character__episodio'>{episode.name}</li>
                        </ul>
                    </div>
                </div>
        </Link>

    )
}

export default CharacterCard;