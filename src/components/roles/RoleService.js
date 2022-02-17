import axios from 'axios';

export default class RoleService {

    apiEndpoint = "/API/roles";

    getRoles() {
        return axios.get(`${this.apiEndpoint}`).then(res => res.data);
    }

    deleteRole(roleId) {
        return axios.delete(`${this.apiEndpoint}/${roleId}`).then(res => res.data);
    }
}
