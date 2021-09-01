import axios from 'axios';

export default class UserService {

    apiEndpoint = "/REST/users";

    createUser(user) {
        return axios.post(`${this.apiEndpoint}`, user).then(res => res.data);
    }

    getUser(userId) {
        return axios.get(`${this.apiEndpoint}/${userId}`).then(res => res.data);
    }

    getUsers() {
        return axios.get(`${this.apiEndpoint}`).then(res => res.data);
    }

    updateUser(user) {
        return axios.put(`${this.apiEndpoint}/${user.userId}`, user).then(res => res.data);
    }

    // deleteUser(userId) {
    //     return axios.delete(`/REST/users/`${userId}).then(res => res.data);
    // }
}
