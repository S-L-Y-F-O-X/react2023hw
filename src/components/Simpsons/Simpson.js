const Simpson = ({simpson}) => {
    const {name, age, gender, image} = simpson;
    return (
        <div>
            <hr/>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Simpson};