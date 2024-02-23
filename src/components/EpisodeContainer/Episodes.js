import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import css from './Episodes.module.css'
import {episodeService} from "../../services";
import {Episode} from "./Episode";
const Episodes = () => {
    const [episode, setEpisode] = useState({prev: null, next: null, results: []})
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => {
            const { info: { prev, next }, results } = data;
            setEpisode({ prev, next, results });
        });
    }, [page]);

    const prevHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`);
            return prev;
        })
    };

    const nextHandler = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`);
            return prev;
        })
    };

    return (
        <div>
            <div className={css.Episodes}>
            {episode.results.map(episode=><Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.Buttons}>
                <button disabled={!episode.prev} onClick={prevHandler}>Prev</button>
                <button disabled={!episode.next} onClick={nextHandler}>Next</button>
            </div>

        </div>
    );
};

export {Episodes};