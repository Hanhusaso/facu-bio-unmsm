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

// export async function getNoticiasSubcategoriaApi(id_subcategoria){
//     try {
//         const url = `${BASE_PATH}/noticias-subcategorias/${id_subcategoria}`;
//         const response = await fetch(url);
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }

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
  
