import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card/character-card";
import './style.css'

function CharacterList() {


    useEffect(() => {
        getCharacters()
        // .then(cs => {
        //     getLocations().then(l => {
        //         let character = cs?.map((c,i) =>  ({...c, location: l[i]}));
        //         // setFiltered(character);
        //         // setOriginalCharacterList(character);
        //         console.log(character)
        //     }); 
        // });             
    },[])

    async function getCharacters() {
        const requestCharacterNumber = await fetch('https://rickandmortyapi.com/api/character');
        const responseCharacterNumber = await requestCharacterNumber.json();
        const requestCharacters = await fetch(`https://rickandmortyapi.com/api/character/${generateCountArray(responseCharacterNumber.info.count)}`)
        const responseCharacters = await requestCharacters.json();
        setOriginalCharacterList(responseCharacters)
        setFiltered(responseCharacters)
    }


    function generateCountArray(count) {
        const arrCharacters = [];
        for (let i = 1; i <= count; i++) {
            arrCharacters.push(i)
        }
        return arrCharacters;
    }

    // async function getLocations(){
    //     let r = await fetch('https://rickandmortyapi.com/api/location');
    //     const d = await r.json();
    //     r= await fetch(`https://rickandmortyapi.com/api/location/${generateCountArray(d.info.count)}`)
    //     return await r.json();
    // }

  
    let currentCharacterSearch;

    // let [currentCharacterSearch, setCurrentCharacterSearch] = useState(''); //pasar a state
    // let [currentLocationSearch, setCurrentLocationSearch] = useState(''); //pasar a state

    let [originalCharacterList, setOriginalCharacterList] = useState([]); //pasar a state
    let [filtered, setFiltered] = useState(originalCharacterList)

    function filteredInputs() {

        let filteredCharacters = originalCharacterList.filter(c => {
            return c.name.toLowerCase().includes(currentCharacterSearch)
            // && c.location.name.toLowerCase().includes(currentLocationSearch)
        })
        setFiltered(filteredCharacters)
    }

    function handleChange(e) {
        currentCharacterSearch = e.target.value.toLowerCase()
        filteredInputs();

    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setCurrentLocationSearch(e.target.locationInput.value);
    //     filteredInputs();
    // }


    //Estas funciones son los dos filtros 


    // function handleChange(e) {
    //     const info = e.target.value.toLowerCase();
    //     const filteredByName = filtered.filter(c => c.name.toLowerCase().includes(info))
    //     setFiltered(filteredByName);

    // }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     const infoLocation = e.target.locationInput.value;
    //     console.log(infoLocation)
    //     const filteredByLocation = filtered.filter(c => c.location.name?.toLowerCase().includes(infoLocation))
    //     setFiltered(filteredByLocation);
    // }






    return (<React.Fragment>
        <input placeholder='find a character' className='search__input' type='text' name='searchInput' onChange={handleChange}></input>
        {/* <form onSubmit={handleSubmit}>
            <input placeholder='find a location' className='location__input' type='text' name='locationInput'></input>
            <button type='submit'>Search</button>
        </form> */}
        <div className='characters__container'>
            {filtered.map(c => <CharacterCard data={c} key={c.id} ></CharacterCard>)}
        </div>
    </React.Fragment>

    )
}

export default CharacterList;