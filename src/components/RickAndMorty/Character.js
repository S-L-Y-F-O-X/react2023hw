const Character = ({character}) => {
    const {name,status,species,gender,image} = character;

    return (
        <div>
            <hr/>
            <div>Name: {name}</div>
            <div>Status: {status}</div>
            <div>Species: {species}</div>
            <div>Gender: {gender}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};