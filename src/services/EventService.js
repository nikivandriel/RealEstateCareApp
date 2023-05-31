import axios from "axios";

const apiClient = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/nikivandriel/RealEstateCareApp',
    baseURL: 'http://localhost:3000',

    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPage(subURL) {
        return apiClient.get(subURL)
    },
    putPage(subURL, obj) {
        return apiClient.put(subURL, obj)
    }

}