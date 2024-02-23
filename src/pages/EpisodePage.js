import {useEffect} from "react";

import {Episodes} from "../components";
import {useNameEpisode} from "../hooks";

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