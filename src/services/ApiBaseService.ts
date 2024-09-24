import axios, { AxiosResponse, Method } from "axios";
import { getBaseUrl, getNasaApiKey } from "../utils/genericUtils";

export abstract class ApiBaseService {

    static async request(method: Method, requestUrl: string, body?: any): Promise<AxiosResponse> {
        const baseURL = getBaseUrl();
        const timeout = 3000;
        console.log('BASE URL ', baseURL);
        console.log('nasa URL ', getNasaApiKey());

        // let fullPath = baseURL + requestUrl;
        let fullPath = requestUrl;

        const instance = axios.create();

        return instance.request({
            baseURL: fullPath,
            method: method,
            timeout: timeout,
            // headers: {
            //     'api_key': getNasaApiKey(),
            // },
            data: body,
        })
    }

}