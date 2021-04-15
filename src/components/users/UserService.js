import axios from 'axios';

export default class UserService {

    // saveUser(user) {
    //     return axios.post('https://api/users/' + user).then(res => res.data);
    // }

    getUser(userId) {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.data);
    }

    getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data);
    }

    // updateUser(user) {
    //     return axios.put('https://api/users/' + user).then(res => res.data);
    // }
    //
    // deleteUser(userId) {
    //     return axios.delete('https://api/users/' + userId).then(res => res.data);
    // }


}
