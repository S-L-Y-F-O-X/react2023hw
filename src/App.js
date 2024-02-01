import {Simpsons} from "./components/Simpsons/Simpsons";
import {Characters} from "./components/RickAndMorty/Characters";

const App = () => {
    return (
        <div>
            <h1>Simpson family</h1>
            <Simpsons/>
            <h1>Characters "Rick and Morty"</h1>
            <Characters/>
        </div>
    );
};

export {App};