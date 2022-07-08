import HttpClient from "../api/http-client";

export default class UserService {

    apiEndpoint = "/API/users";
    httpClient = new HttpClient(this.apiEndpoint);

    createUser(user) {
        return this.httpClient.post(`${this.apiEndpoint}`, user).then(data => data);
    }

    getUser(userId) {
        return this.httpClient.get(`${this.apiEndpoint}/${userId}`).then(data => data);
    }

    getUsers() {
        return this.httpClient.get(`${this.apiEndpoint}`).then(data => data);
    }

    updateUser(user) {
        return this.httpClient.put(`${this.apiEndpoint}/${user.userId}`, user).then(data => data);
    }

    deleteUser(userId) {
        return this.httpClient.delete(`${this.apiEndpoint}/${userId}`).then(data => data);
    }

    /** User Roles */
    getUserRoles(userId) {
        return this.httpClient.get(`${this.apiEndpoint}/${userId}/roles`).then(data => data);
    }

    createUserRole(user) {
        return this.httpClient.post(`${this.apiEndpoint}/${user.userId}/roles`, user).then(data => data);
    }
}
