import axios from 'axios';

export default class ClientService {

    static async getAll() {
        try {
            const response = await axios.get("http://62.192.227.9:7000/api/getClientsList")
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}