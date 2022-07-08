import HttpClient from "../api/http-client";

export default class RoleService {

    apiEndpoint = "/API/roles";
    httpClient = new HttpClient(this.apiEndpoint);

    getRoles() {
        return this.httpClient.get(`${this.apiEndpoint}`).then(data => data);
    }

    getRole(roleId) {
        return this.httpClient.get(`${this.apiEndpoint}/${roleId}`).then(data => data);
    }

    createRole(role) {
        return this.httpClient.post(`${this.apiEndpoint}`, role).then(data => data);
    }

    updateRole(role) {
        return this.httpClient.put(`${this.apiEndpoint}/${role.roleId}`, role).then(data => data);
    }

    deleteRole(roleId) {
        return this.httpClient.delete(`${this.apiEndpoint}/${roleId}`).then(data => data);
    }
}
