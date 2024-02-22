import css from './Header.module.css'
import {useNameEpisode} from "../../hooks";


const Header = () => {
    const {nameEpisode} = useNameEpisode();
    return (
        <div className={css.Header}>
            {
                nameEpisode ?
                    <h1>{nameEpisode}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};