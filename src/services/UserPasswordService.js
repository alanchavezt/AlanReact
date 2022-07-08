import HttpClient from "../api/http-client";

export default class UserPasswordService {

    apiEndpoint = "/API/users";
    httpClient = new HttpClient(this.apiEndpoint);

    createUserPassword(user) {
        return this.httpClient.post(`/API/users/${user.userId}/password`, user).then(data => data);
    }

    resetUserPassword(user) {
        return this.httpClient.put(`${this.apiEndpoint}/${user.userId}/password`, user).then(data => data);
    }
}
