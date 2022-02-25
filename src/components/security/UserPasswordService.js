import axios from 'axios';

export default class UserPasswordService {

    apiEndpoint = "/API/passwords";

    createUserPassword(user) {
        return axios.post(`/API/users/${user.userId}/password`, user).then(res => res.data);
    }

    resetUserPassword(user) {
        return axios.put(`${this.apiEndpoint}/${user.userId}`, user).then(res => res.data);
    }
}
