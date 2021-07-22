import { BASE_PATH } from "../../utils/constants";

export async function getPreguntasFrecuentesApi(palabra){
    try {
        var query = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][docente_contains]=${palabra}`
            query = query + `/?nombre_contains=${palabra}`;
        }

        const url = `${BASE_PATH}/preguntas-frecuentes${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}