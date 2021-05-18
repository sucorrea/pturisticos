import axios from "axios";

const PONTOS_API_BASE_URL = "http://localhost:5000/pturisticos";
class servicePoint {

    getPontosSemfiltro(_filtro) {
        return axios.get(PONTOS_API_BASE_URL);
    }
    getPontos(filtro) {
        return axios.get(PONTOS_API_BASE_URL + "/nome/" + filtro);
    }
    salvar(ponto) {
        return axios.post(PONTOS_API_BASE_URL, ponto);

    }

}
export default new servicePoint()