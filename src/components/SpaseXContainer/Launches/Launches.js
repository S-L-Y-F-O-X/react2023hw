import {useEffect, useState} from "react";


import {Launch} from "../Launch/Launch";
import {spaceXService} from "../../../services/SpaseXService";
import css from './Launches.module.css'

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        spaceXService.getAll().then(({data}) => {const filter = data.filter(item=>item.launch_year!=="2020");
            setLaunches(filter)})
    }, []);
    return (
        <div className={css.MainLaunches}>
            <h1>SpaceX Launches</h1>
            <div className={css.Launches}>
                {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
            </div>
        </div>
    );
};

export {Launches};