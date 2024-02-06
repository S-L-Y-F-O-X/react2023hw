import css from './Launch.module.css'

const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    return (
        <div className={css.Launch}>
            <div>Mission name: <b>{mission_name}</b></div>
            <div>Launch year: <b>{launch_year}</b></div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};