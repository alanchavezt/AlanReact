import axios from 'axios';

export default class UserPasswordService {

    apiEndpoint = "/API/passwords";

    resetUserPassword(user) {
        return axios.put(`${this.apiEndpoint}/${user.userId}`, user).then(res => res.data);
    }
}
