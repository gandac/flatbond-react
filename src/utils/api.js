
import {BASE_API_URL} from 'state/constants';
import axios from 'axios';

/**
 * Reusable utility for handling API calls via axios HTTP client.
 */
const apiCall = axios.create({
    baseURL: BASE_API_URL,
   // headers: {'Content-Type': 'application/json; charset=UTF-8' }
});
 
export default apiCall;