import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './style.css'
import CharacterListPortal from '../../components/character-list-portal/character-list-portal'

function CharacterDetailPage() {

    let { id } = useParams();
    let [data, setData] = useState({})
    let [episode, setEpisode] = useState([])

    useEffect(() => {
        let episodes = [];
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(r => r.json())
            .then(d => {
                setData(d)
                for (let i = 0; i <= d.episode.length; i++) {
                    fetch(d.episode[i])
                        .then(response => response.json())
                        .then(episode => {
                            episodes.push(episode)
                            if (d.episode.length-1=== i) {
                                setEpisode(episodes)
                            }
                        })
                }
            })

    }, [id])

    return (<React.Fragment>
        <div className='character__detailed__container'>
            <img className='character__image' src={data.image} alt="character"></img>
            <CharacterListPortal></CharacterListPortal>
            <div className='text__container'>
                <h2 className='character__name'>{data.name}</h2>
                <ul>
                    <li className={`character__status__detail ` + data.status}>{data.status}</li>
                    <li className='character__species'>{data.species}</li>
                    <li className='character__gender'>{data.gender}</li>
                    <div className='episodes__container'>{episode.map((e, i) => <li style={{width:'50%'}} key={i}><span className='episode__title'>{e.name}</span>: {e.episode}</li>)}</div>
                </ul>
            </div>
        </div>

    </React.Fragment>

    )
}

export default CharacterDetailPage