import {axiosService} from "./axiosService";

import {urls} from "../constants";

export const characterService = {
    getById: (id)=>axiosService.get(urls.characters.byId(id))
}