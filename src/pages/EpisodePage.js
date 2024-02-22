import {Episodes} from "../components";
import {useNameEpisode} from "../hooks";
import {useEffect} from "react";

const EpisodePage = () => {
    const {setNameEpisode} = useNameEpisode();

    useEffect(() => {
        setNameEpisode(null)
    }, [setNameEpisode]);
    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodePage};