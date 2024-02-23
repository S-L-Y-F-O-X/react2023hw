import {axiosService} from "./axiosService";

import {urls} from "../constants";

export const episodeService = {
    getAll:(page)=>axiosService.get(urls.episode, {params:{page}})
}
