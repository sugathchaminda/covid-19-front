import axios from 'axios';
import appConfig from 'appConfig';

const scApiUrl = `${appConfig.api_base_url}/${appConfig.api_prefix}`;


const httpRequests = {
    getGeneralStatData: () => axios.get(`${scApiUrl}/general/stats`),
    getDailyStatData: () => axios.get(`${scApiUrl}/daily/stats`),
    getProvinceStatData: () => axios.get(`${scApiUrl}/province/stats`),
};

export default httpRequests;
