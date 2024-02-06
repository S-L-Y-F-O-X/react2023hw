import {axiosService} from "./axiosPostService";

import {urls} from "../constants/urls";

const postService ={
    getAll: () => axiosService.get(urls.posts.base),
    getById: (id) => axiosService.get(urls.posts.byId(id))
}

export {postService}