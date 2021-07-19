import { BASE_PATH } from "../../utils/constants";

export async function getEventosHomeApi(){
  try {
      const url = `${BASE_PATH}/eventos?_limit=4&fechaInicio_gte=2021-07-19&_sort=fechaInicio:ASC`;
      const response = await fetch(url);
      const result = await response.json();
      var eventos = [];
      for(var i=0; i<result.length; i++){
        eventos.push(result[i]);
      }
      return eventos;
  } catch (error) {
      console.log(error);
      return [];
  }
}

export async function getEventosApi(limit, start, palabra, tipos, date){
    try {
        const limitItems = `_limit=${limit}`;
        const startItems = `_start=${start}`;
        var query = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
            query = query + `&nombre_contains=${palabra}`;
        }

        if(tipos.length != 0){
            for(var i=0; i<tipos.length; i++){
                query = query + `&_where[_or][0][tipo]=${tipos[i]}`;
            }
        }

        if(date != ""){
            query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
        }

        const url = `${BASE_PATH}/eventos?_sort=fechaInicio:DESC&${limitItems}&${startItems}${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countEventosApi(palabra, tipos, date){
    try {
        var query = '';

        if(palabra != ""){
            if(query != ''){
                query = query + `&nombre_contains=${palabra}`;
            }
            else{
                query = query + `?nombre_contains=${palabra}`;
            }
        }

        if(tipos.length != 0){
            for(var i=0; i<tipos.length; i++){
                if(query != ''){
                    query = query + `&_where[_or][0][tipo]=${tipos[i]}`;
                }
                else{
                    query = query + `?_where[_or][0][tipo]=${tipos[i]}`;
                }
            }
        }

        if(date != ""){
            if(query != ''){
                query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
            }
            else{
                query = query + `?fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
            }
        }

        const url = `${BASE_PATH}/eventos/count${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getEventoByUrlApi(url_evento){
    try {
        const url = `${BASE_PATH}/eventos/?url_nombre=${url_evento}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function updateVisitasEventoApi(id_evento, visitas){
    try {
        const url = `${BASE_PATH}/eventos/${id_evento}`;
        const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ visitas: Number(visitas)+1 }),
        };
        const result = await fetch(url, params);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getEventosUltimasApi(){
    try {
        const url = `${BASE_PATH}/eventos/?`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}