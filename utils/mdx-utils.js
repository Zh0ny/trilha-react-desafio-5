import { api } from "../services/api";

export const getPosts = async () => {
    const {data} = await api.get('/Posts?select=*', {
    }); 
    if(data){
        return data;
    } 

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/Posts?id=eq.${id}`);
    console.log(data);
    if(data){
        return data[0];
    }

    return []
}