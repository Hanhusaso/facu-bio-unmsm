import { BASE_PATH } from "../../utils/constants";

export async function getEventosHomeApi(){
  try {
      const url = `${BASE_PATH}/eventos?_limit=4&fechaInicio_gte=${(String(new Date().getFullYear()))+"-"+(new Date().getMonth()+1 < 10 ? "0"+String(new Date().getMonth()+1) : String(new Date().getMonth()+1))+"-"+(new Date().getDate() < 10 ? "0"+String(new Date().getDate()) : String(new Date().getDate()))}&_sort=fechaInicio:ASC`;
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
        var fechas_posteriores = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
            query = query + `&nombre_contains=${palabra}`;
        }
        else{
            fechas_posteriores = fechas_posteriores + `&fechaInicio_gte=${(String(new Date().getFullYear()))+"-"+(new Date().getMonth()+1 < 10 ? "0"+String(new Date().getMonth()+1) : String(new Date().getMonth()+1))+"-"+(new Date().getDate() < 10 ? "0"+String(new Date().getDate()) : String(new Date().getDate()))}`;
        }
        if(tipos.length != 0){
            for(var i=0; i<tipos.length; i++){
                if(tipos[i] != 'otros'){
                    query = query + `&_where[_or][0][0][tipo]=${tipos[i]}`;
                }
                else{
                    query = query + `&_where[_or][1][0][tipo_nin]=Conferencia&_where[_or][1][1][tipo_nin]=Seminario&_where[_or][1][2][tipo_nin]=Charla`;
                    // query = query + `&tipo_nin=Conferencia&tipo_nin=Seminario&tipo_nin=Charla`;
                }
            }
        }

        if(date != ""){
            query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
        }

        const url = `${BASE_PATH}/eventos?_sort=fechaInicio:ASC&${limitItems}&${startItems}${query}${fechas_posteriores}`;
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
        var fechas_posteriores = '';

        if(palabra != ""){
            if(query != ''){
                query = query + `&nombre_contains=${palabra}`;
            }
            else{
                query = query + `?nombre_contains=${palabra}`;
            }
        }else{
            if(query != ''){
                fechas_posteriores = fechas_posteriores + `&fechaInicio_gte=${(String(new Date().getFullYear()))+"-"+(new Date().getMonth()+1 < 10 ? "0"+String(new Date().getMonth()+1) : String(new Date().getMonth()+1))+"-"+(new Date().getDate() < 10 ? "0"+String(new Date().getDate()) : String(new Date().getDate()))}`;
            }
            else{
                fechas_posteriores = fechas_posteriores + `?fechaInicio_gte=${(String(new Date().getFullYear()))+"-"+(new Date().getMonth()+1 < 10 ? "0"+String(new Date().getMonth()+1) : String(new Date().getMonth()+1))+"-"+(new Date().getDate() < 10 ? "0"+String(new Date().getDate()) : String(new Date().getDate()))}`;
            }
        }

        if(tipos.length != 0){
            for(var i=0; i<tipos.length; i++){
                if(tipos[i] != 'otros'){
                    if(query != ''){
                        query = query + `&_where[_or][0][0][tipo]=${tipos[i]}`;
                    }
                    else{
                        query = query + `?_where[_or][0][0][tipo]=${tipos[i]}`;
                    }
                }
                else{
                    if(query != ''){
                        query = query + `&_where[_or][1][0][tipo_nin]=Conferencia&_where[_or][1][1][tipo_nin]=Seminario&_where[_or][1][2][tipo_nin]=Charla`;
                    }
                    else{
                        query = query + `?_where[_or][1][0][tipo_nin]=Conferencia&_where[_or][1][1][tipo_nin]=Seminario&_where[_or][1][2][tipo_nin]=Charla`;
                    }
                    // query = query + `&tipo_nin=Conferencia&tipo_nin=Seminario&tipo_nin=Charla`;
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

        const url = `${BASE_PATH}/eventos/count${query}${fechas_posteriores}`;
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

export async function getEventosUltimosApi(){
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