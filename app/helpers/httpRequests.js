import axios from 'axios';
import appConfig from 'appConfig';

const scApiUrl = `${appConfig.api_base_url}/${appConfig.api_prefix}`;


const httpRequests = {
    getCountriesData: () => axios.get('http://restcountries.eu/rest/v2/all'),
    getGeneralStatData: () => axios.get(`${scApiUrl}/general/stats`),

};

export default httpRequests;
