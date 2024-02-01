import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {id: 1, name: 'Homer', age: 40, gender: 'male', image: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'},
        {id: 2, name: 'Marge', age: 38, gender: 'female', image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
        {id: 3, name: 'Bart', age: 10, gender: 'male', image: 'https://stm.in.ua/wp-content/uploads/2019/04/Happy-Bart-Simpson.jpg'},
        {id: 4, name: 'Lisa', age: 9, gender: 'female', image: 'https://static.wikia.nocookie.net/simpsonstappedout/images/e/ea/Lisa_Unlock.png'},
        {id: 5, name: 'Maggi', age: 1, gender: 'female', image: 'https://i.pinimg.com/736x/0a/ee/e2/0aeee29659d4e437f351bed173ef4bf8.jpg'}
    ]
    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};