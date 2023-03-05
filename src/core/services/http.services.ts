import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseUrl } from '../utils/Constants';
import { to } from 'await-to-ts';
import {
    BaseUrlInterceptor,
} from './interceptors';

export class HttpService {
    private readonly baseUrl = baseUrl;
    constructor() {
        this.interceptors();
    }

    interceptors() {
        BaseUrlInterceptor(this.baseUrl);
    }

    /**
     * @description Get request
     * @param url - the end point url
     * @return Promise of response, comes from the end point
     */
    async get(
        url: string,
        config?: AxiosRequestConfig<any> | undefined,
    ): Promise<any> {
        return await to(axios.get(url, config));
    }
}