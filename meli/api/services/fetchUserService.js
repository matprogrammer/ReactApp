import { loginURL } from '../urls/urlServices';
import axios from 'axios';

async function fetchUserService(params) {
    try {
        const { email, password } = params;
        const data = { 'email': email, 'password': password };
        const res = await axios.post(loginURL, data)
        console.log(res);
        debugger;

    } catch (error) {
        console.log(error);
    }
}

export default fetchUserService;
