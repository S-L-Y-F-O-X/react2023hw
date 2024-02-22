import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {characterService} from "../../services";
import {Character} from "./Character";

const Characters = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState([])

    useEffect(() => {
        characterService.getById(id).then(({data})=>setCharacter(data))
    }, [id]);
    return (
        <div>
            {character.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};