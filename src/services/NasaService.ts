import moment from "moment";
import { ApiKey, BaseUrl } from "../utils/constants";
import { ApiBaseService } from "./ApiBaseService";

export class NasaService implements ApiBaseService {

    // Retrieve a list of Asteroids based on their closest approach date to Earth
    static async getAsteroids(date: String) {
        return await ApiBaseService.request('GET', `${BaseUrl}feed?start_date=${date}&end_date=${date}&api_key=${ApiKey}`);
    }

}