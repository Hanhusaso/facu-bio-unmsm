import { BASE_PATH } from "../../utils/constants";

export async function getProyectosHomeApi(){
  try {
      const url = `${BASE_PATH}/proyectos?_limit=4&_sort=fecha:DESC`;
      const response = await fetch(url);
      const result = await response.json();
      var proyectos = [];
      for(var i=0; i<result.length; i++){
        proyectos.push(result[i]);
      }
      return proyectos;
  } catch (error) {
      console.log(error);
      return [];
  }
}

export async function getProyectosApi(limit, start, palabra, grupos_investigacion, tipos, fechas){
    try {
        const limitItems = `_limit=${limit}`;
        const startItems = `_start=${start}`;
        var query = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
            query = query + `&nombre_contains=${palabra}`;
        }

        if(grupos_investigacion.length != 0){
            for(var i=0; i<grupos_investigacion.length; i++){
                if(grupos_investigacion[i] == "con-responsable"){
                    query = query + `&_where[_or][${i}][0][responsable_ne]=`;
                }
                else{
                    query = query + `&_where[_or][${i}][0][grupo_investigacion]=${grupos_investigacion[i]}`;
                }
            }
        }

        if(tipos.length != 0){
            for(var i=0; i<tipos.length; i++){
                query = query + `&_where[_or][0][tipo]=${tipos[i]}`;
            }
        }

        if(fechas.length != 0){
            // query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
            for(var i=0; i<fechas.length; i++){
                query = query + `&fecha_gte=${fechas[i].split("-")[1]}-01-01T00:00:00.000Z&fecha_lte=${fechas[i].split("-")[0]}-12-31T23:59:59.000Z`;
            }
        }

        const url = `${BASE_PATH}/proyectos?_sort=fecha:DESC&${limitItems}&${startItems}${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countProyectosApi(palabra, grupos_investigacion, tipos, fechas){
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

        if(grupos_investigacion.length != 0){
            for(var i=0; i<grupos_investigacion.length; i++){
                if(grupos_investigacion[i] == "con-responsable"){
                    if(query != ''){
                        query = query + `&_where[_or][${i}][0][responsable_ne]=`;
                    }
                    else{
                        query = query + `?_where[_or][${i}][0][responsable_ne]=`;
                    }
                }
                else{
                    if(query != ''){
                        query = query + `&_where[_or][${i}][0][grupo_investigacion]=${grupos_investigacion[i]}`;
                    }
                    else{
                        query = query + `?_where[_or][${i}][0][grupo_investigacion]=${grupos_investigacion[i]}`;
                    }
                }
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

        if(fechas.length != 0){
            // query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
            for(var i=0; i<fechas.length; i++){
                if(query != ''){
                    query = query + `&fecha_gte=${fechas[i].split("-")[1]}-01-01T00:00:00.000Z&fecha_lte=${fechas[i].split("-")[0]}-12-31T23:59:59.000Z`;
                }
                else{
                    query = query + `?fecha_gte=${fechas[i].split("-")[1]}-01-01T00:00:00.000Z&fecha_lte=${fechas[i].split("-")[0]}-12-31T23:59:59.000Z`;
                }
            }
        }

        const url = `${BASE_PATH}/proyectos/count${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countProyectosByGrupoInvestigacionApi(grupo_investigacion){
    try {
        var query = '';

        if(grupo_investigacion == "con-responsable"){
            query = query + `?responsable_ne=`;
        }
        else{
            query = query + `?grupo_investigacion=${grupo_investigacion}`;
        }

        const url = `${BASE_PATH}/proyectos/count/${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getProyectoByUrlApi(url_nombre){
    try {
        const url = `${BASE_PATH}/proyectos/?url_nombre=${url_nombre}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getProyectosUltimosApi(id_proyecto){
    try {

        var query = '';

        if(id_proyecto != ""){
            query = query + `&id_ne=${id_proyecto}`;
        }

        const url = `${BASE_PATH}/proyectos/?_sort=fecha:DESC&_limit=3${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}