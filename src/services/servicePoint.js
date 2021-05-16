import axios from "axios";

const PONTOS_API_BASE_URL = "http://localhost:7777/pturisticos";
class servicePoint {

    getPontosSemfiltro(filtro) {
        return axios.get(PONTOS_API_BASE_URL);
    }
    getPontos(filtro) {
        return axios.get(PONTOS_API_BASE_URL + "/nome/" + filtro);
    }
    getPontosID(filtroID) {
        return axios.get(PONTOS_API_BASE_URL + "/id/" + filtroID);
    }

    salvar(ponto) {
        return axios.post(PONTOS_API_BASE_URL, ponto);

    }

}
export default new servicePoint()