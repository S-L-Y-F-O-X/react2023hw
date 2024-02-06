import axios from "axios";
import {baseUrlJson} from "../constants/urls";

const axiosService = axios.create({baseURL:baseUrlJson});

export {axiosService}