import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useNameEpisode} from "../../hooks";

const Episode = ({episode}) => {
    const {id, name, episode: episodes, characters} = episode;
    const navigate = useNavigate();
    const {setNameEpisode} = useNameEpisode();

    const toCharacters = () => {
        const id = characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        setNameEpisode(name)
        navigate(`/character/${id}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Episode: {episodes}</div>
        </div>
    );
};

export {Episode};