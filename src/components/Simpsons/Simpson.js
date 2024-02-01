const Simpson = ({simpson}) => {
    const {name, age, gender, image} = simpson;
    return (
        <div>
            <hr/>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};