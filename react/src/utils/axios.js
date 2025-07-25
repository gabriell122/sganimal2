import axios from "axios"
const ConexaoApi = axios.create({
    baseURL: "http://localhost:3333"
})
export default ConexaoApi;