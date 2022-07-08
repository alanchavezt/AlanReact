import HttpClient from "../api/http-client";

export default class SignInService {

    apiEndpoint = "/API/auth/signin";
    httpClient = new HttpClient(this.apiEndpoint);

    signIn(credentials) {
        return this.httpClient.post(`${this.apiEndpoint}`, credentials).then(data => data);
    }

}
