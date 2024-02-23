import {useContext} from "react";

import {Context} from "../hoc";

const useNameEpisode = () =>{
    const [nameEpisode, setNameEpisode] = useContext(Context);
    return {
        nameEpisode,
        setNameEpisode
    }
}

export {
    useNameEpisode
}