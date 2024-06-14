import axios from 'axios';

const URL = 'http://localhost:4000' ;     // this is api url [backend url]

export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data ); 
    }catch (error){
        console.log(error)
    }
}

export const getUsers = async () =>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log(error)
    }
}