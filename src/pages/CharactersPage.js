import {Characters} from "../components";
import {useNavigate} from "react-router-dom";
import {useNameEpisode} from "../hooks";

const CharactersPage = () => {
    const navigate = useNavigate();
    const {setNameEpisode} = useNameEpisode();

    const back = ()=>

        navigate(-1)
    return (
        <div>
            <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};