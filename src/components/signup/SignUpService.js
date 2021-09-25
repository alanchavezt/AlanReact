import axios from 'axios';

export default class SignUpService {

    apiEndpoint = "/REST/signup";

    signUpUser(user) {
        return axios.post(`${this.apiEndpoint}`, user).then(res => res.data);
    }
}
