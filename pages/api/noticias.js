import { BASE_PATH } from "../../utils/constants";

export async function getNoticiasHomeApi(){
  try {
      const url = `${BASE_PATH}/noticias?_limit=4&_sort=fecha:DESC`;
      const response = await fetch(url);
      const result = await response.json();
      var noticias = [];
      for(var i=0; i<result.length; i++){
        noticias.push(result[i]);
      }
      return noticias;
  } catch (error) {
      console.log(error);
      return [];
  }
}

export async function getNoticiasSubcategoriasApi(){
    try {
        const url = `${BASE_PATH}/noticias-subcategorias`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getNoticiasApi(limit, start, palabra, categorias, date){
    try {
        const limitItems = `_limit=${limit}`;
        const startItems = `_start=${start}`;
        var query = '';

        if(palabra != ""){
            // query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
            query = query + `&titulo_contains=${palabra}`;
        }

        if(categorias.length != 0){
            for(var i=0; i<categorias.length; i++){
                query = query + `&_where[_or][0][id_categoria_subcategoria.id_categoria]=${categorias[i]}`;
            }
        }

        if(date != ""){
            // query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
            query = query + `&fecha_gte=${date}T00:00:00.000Z&fecha_lte=${date}T23:59:59.000Z`;
        }

        const url = `${BASE_PATH}/noticias?_sort=fecha:DESC&${limitItems}&${startItems}${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countNoticiasApi(palabra, categorias, date){
    try {
        var query = '';

        if(palabra != ""){
            if(query != ''){
                query = query + `&titulo_contains=${palabra}`;
            }
            else{
                query = query + `?titulo_contains=${palabra}`;
            }
        }

        if(categorias.length != 0){
            for(var i=0; i<categorias.length; i++){
                if(query != ''){
                    query = query + `&_where[_or][0][id_categoria_subcategoria.id_categoria]=${categorias[i]}`;
                }
                else{
                    query = query + `?_where[_or][0][id_categoria_subcategoria.id_categoria]=${categorias[i]}`;
                }
            }
        }

        if(date != ""){
            if(query != ''){
                // query = query + `&fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
                query = query + `&fecha_gte=${date}T00:00:00.000Z&fecha_lte=${date}T23:59:59.000Z`;
            }
            else{
                // query = query + `?fecha=${new Date(date).getFullYear()+"-"+(new Date(date).getMonth()+1 < 10 ? "0"+(new Date(date).getMonth()+1) : new Date(date).getMonth()+1)+"-"+(new Date(date).getDate() < 10 ? "0"+new Date(date).getDate() : new Date(date).getDate())}`;
                query = query + `?fecha_gte=${date}T00:00:00.000Z&fecha_lte=${date}T23:59:59.000Z`;
            }
        }

        const url = `${BASE_PATH}/noticias/count${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getNoticiaByUrlApi(url_noticia){
    try {
        const url = `${BASE_PATH}/noticias/?url_titulo=${url_noticia}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function updateVisitasNoticiaApi(id_noticia, visitas){
    try {
        const url = `${BASE_PATH}/noticias/${id_noticia}`;
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

export async function getNoticiasUltimasApi(id_noticia){
    try {
        const url = `${BASE_PATH}/noticias/?_sort=fecha:DESC&_limit=3&id_ne=${id_noticia}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getNoticiasUltimas2Api(){
    try {
        const url = `${BASE_PATH}/noticias/?_sort=fecha:DESC&_limit=3`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
  
