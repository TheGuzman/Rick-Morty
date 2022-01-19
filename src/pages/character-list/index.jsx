import React from "react"
import CharacterList from "../../components/character-list/character-list";
import './style.css'
import HomePortal from "../../components/home-portal/character-list-portal";

function CharacterListPage() {
    



    return (<React.Fragment>
        <HomePortal></HomePortal>
        <CharacterList></CharacterList>
    </React.Fragment>

    )
}

export default CharacterListPage;