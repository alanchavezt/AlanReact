import HttpClient from "../api/http-client";

export default class SignUpService {

    apiEndpoint = "/API/signup";
    httpClient = new HttpClient(this.apiEndpoint);

    signUpUser(user) {
        return this.httpClient.post(`${this.apiEndpoint}`, user).then(data => data);
    }
}
