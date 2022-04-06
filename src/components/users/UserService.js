import axios from 'axios';

export default class UserService {

    apiEndpoint = "/API/users";

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

    deleteUser(userId) {
        return axios.delete(`${this.apiEndpoint}/${userId}`).then(res => res.data);
    }

    /** User Roles */
    getUserRoles(userId) {
        return axios.get(`${this.apiEndpoint}/${userId}/roles`).then(res => res.data);
    }

    createUserRole(user) {
        return axios.post(`${this.apiEndpoint}/${user.userId}/roles`, user).then(res => res.data);
    }
}
