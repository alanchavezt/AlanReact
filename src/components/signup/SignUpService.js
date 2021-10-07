import axios from 'axios';

export default class SignUpService {

    apiEndpoint = "/API/signup";

    signUpUser(user) {
        return axios.post(`${this.apiEndpoint}`, user).then(res => res.data);
    }
}
