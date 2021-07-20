import { BASE_PATH } from "../../utils/constants";


export async function getTramitesProcesosApi(limit, start, palabra, dirigido_a, frecuentes){
    try {
        const limitItems = `_limit=${limit}`;
        const startItems = `_start=${start}`;
        var query = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
            query = query + `&nombre_tramite_contains=${palabra}`;
        }

        if(dirigido_a.length != 0){
            for(var i=0; i<dirigido_a.length; i++){
                query = query + `&_where[_or][0][dirigido_a_contains]=${dirigido_a[i]}`;
            }
        }

        if(frecuentes.length != 0){
            for(var i=0; i<frecuentes.length; i++){
                query = query + `&_where[_or][0][tipo]=${frecuentes[i]}`;
            }
        }

        const url = `${BASE_PATH}/tramites-procesos?_sort=id:ASC&${limitItems}&${startItems}${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countTramitesProcesosApi(palabra, dirigido_a, frecuentes){
    try {
        var query = '';

        if(palabra != ""){
            if(query != ''){
                query = query + `&nombre_tramite_contains=${palabra}`;
            }
            else{
                query = query + `?nombre_tramite_contains=${palabra}`;
            }
        }

        if(dirigido_a.length != 0){
            for(var i=0; i<dirigido_a.length; i++){
                if(query != ''){
                    query = query + `&_where[_or][0][dirigido_a_contains]=${dirigido_a[i]}`;
                }
                else{
                    query = query + `?_where[_or][0][dirigido_a_contains]=${dirigido_a[i]}`;
                }
            }
        }

        if(frecuentes.length != 0){
            for(var i=0; i<frecuentes.length; i++){
                if(query != ''){
                    query = query + `&_where[_or][0][tipo]=${frecuentes[i]}`;
                }
                else{
                    query = query + `?_where[_or][0][tipo]=${frecuentes[i]}`;
                }
            }
        }

        const url = `${BASE_PATH}/tramites-procesos/count${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTramiteProcesoByUrlApi(url_tramite_proceso){
    try {
        const url = `${BASE_PATH}/tramites-procesos/?url_tramite=${url_tramite_proceso}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
  
