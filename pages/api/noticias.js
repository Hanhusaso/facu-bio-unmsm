import { BASE_PATH } from "../../utils/constants";

export async function getNoticiasHomeApi(){
  try {
      const url = `${BASE_PATH}/noticias?_limit=4&_sort=id:DESC`;
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

export async function getNoticiasApi(limit, start, palabra, categorias){
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

        const url = `${BASE_PATH}/noticias?_sort=fecha:DESC&${limitItems}&${startItems}${query}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function countNoticiasApi(palabra, categorias){
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
  
