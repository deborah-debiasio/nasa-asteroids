import moment from "moment";
import { ApiKey, BaseUrl } from "../utils/constants";
import { ApiBaseService } from "./ApiBaseService";

export class NasaService implements ApiBaseService {

    // Retrieve a list of Asteroids based on their closest approach date to Earth
    static async getAsteroids() {
        const todayDate = moment().format("YYYY-MM-DD");
        return await ApiBaseService.request('GET', `${BaseUrl}feed?start_date=${todayDate}&end_date=${todayDate}&api_key=${ApiKey}`);
    }

}