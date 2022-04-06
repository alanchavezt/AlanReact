import axios from 'axios';

export default class RoleService {

    apiEndpoint = "/API/roles";

    getRoles() {
        return axios.get(`${this.apiEndpoint}`).then(res => res.data);
    }

    getRole(roleId) {
        return axios.get(`${this.apiEndpoint}/${roleId}`).then(res => res.data);
    }

    createRole(role) {
        return axios.post(`${this.apiEndpoint}`, role).then(res => res.data);
    }

    updateRole(role) {
        return axios.put(`${this.apiEndpoint}/${role.roleId}`, role).then(res => res.data);
    }

    deleteRole(roleId) {
        return axios.delete(`${this.apiEndpoint}/${roleId}`).then(res => res.data);
    }
}
