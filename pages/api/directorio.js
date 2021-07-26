import { BASE_PATH } from "../../utils/constants";

export async function getDirectoriosApi(palabra){
    try {
        var query = '';

        if(palabra != ""){
            query = query + `/?_where[_or][0][unidad_contains]=${palabra}&_where[_or][1][nombre_contains]=${palabra}`
            // query = query + `/?nombre_contains=${palabra}`;
        }

        const url = `${BASE_PATH}/directorios${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}