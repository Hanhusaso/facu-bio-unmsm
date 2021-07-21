import { BASE_PATH } from "../../utils/constants";


export async function getInformacionesAcademicasApi(recursos, escuelas){
    try {
        var query = '';

        if(recursos.length != 0){
            for(var i=0; i<recursos.length; i++){
                query = query + `&_where[_or][0][recurso]=${recursos[i]}`;
            }
        }

        if(escuelas.length != 0){
            for(var i=0; i<escuelas.length; i++){
                query = query + `&_where[_or][0][escuela]=${escuelas[i]}`;
            }
        }

        const url = `${BASE_PATH}/informacion-academicas?_sort=id:ASC${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getInformacionAcademicaByUrlApi(url_informacion_academica){
    try {
        const url = `${BASE_PATH}/informacion-academicas/?url_nombre=${url_informacion_academica}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
  
