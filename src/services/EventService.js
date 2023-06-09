import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.jsonbin.io/v3/b/6479e266b89b1e2299a8c8b8',

    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': '$2b$10$qEccqE1LWB.Ud/4DbDpqE.u0wgxMwoI6n.b6UsZp4cL3.AiesDvvC',
    }
})


export default {
    getPage() {
        return apiClient.get()
    },
    async putPage(obj) {
        await axios.put('https://api.jsonbin.io/v3/b/6479e266b89b1e2299a8c8b8', obj, {
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': '$2b$10$qEccqE1LWB.Ud/4DbDpqE.u0wgxMwoI6n.b6UsZp4cL3.AiesDvvC',
            },
          });
        
    }

}