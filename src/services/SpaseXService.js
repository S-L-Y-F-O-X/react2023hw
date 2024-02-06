import {urls} from "../constants/urls";
import {axiosSpaceXService} from "./axiosSpaceXService";

const spaceXService = {
    getAll: () =>axiosSpaceXService.get(urls.spaseX)
}

export {spaceXService}