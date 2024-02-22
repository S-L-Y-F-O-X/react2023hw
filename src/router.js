import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodePage} from "./pages";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'episode'}/>},
            {path:'episode', element:<EpisodePage/>},
            {path:'character/:id', element:<CharactersPage/>}
        ]}
]);

export {
    router
}
