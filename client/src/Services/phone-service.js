import axios from 'axios'

export default class PhoneService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/",
            withCredentials: true
        })

    }
    getAll = () => {
        return this.service.get('/phones')
            .then(response => response.data)

    }
}
