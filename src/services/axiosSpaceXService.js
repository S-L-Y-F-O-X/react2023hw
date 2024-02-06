import axios from "axios";

import {baseUrlSpaseX} from "../constants/urls";

const axiosSpaceXService = axios.create({baseURL:baseUrlSpaseX});

export {axiosSpaceXService}