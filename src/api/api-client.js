import HttpClient from "./http-client";

class ApiClient extends HttpClient {
    constructor(baseURL, langCode) {
        super({
            baseURL,
            headers: {
                lang: langCode
            }
        });
    }

    /**
     * I added the @babel/plugin-proposal-class-properties
     * so you can use the code below instead, whick i like more
     */
    // users = {
    //   get: () => this.get("/users"),
    //   delete: (id) => this.delete(`/users/${id}`),
    //   create: (user) => this.post("/users", user),
    //   update: (user) => this.put(`/users/${user.id}`, user)
    // };

    get users() {
        return {
            get: () => this.get("/users"),
            delete: (id) => this.delete(`/users/${id}`),
            create: (user) => this.post("/users", user),
            update: (user) => this.put(`/users/${user.id}`, user)
        };
    }
}

export default ApiClient;
