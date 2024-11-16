import axios from "axios";



const BASE_URL = 'http://127.0.0.1:8000/accounts/';


export const register = async (userData) => {
    try {

        const response = await axios.post('${BASE_URL}register/' ,userData );
        return response.data

    } catch(error){
        throw error.response.data;
    }

};



export const login = async (credentials) => {
    try {
        const response = await axios.post('${BASE_URL}login/' ,credentials );
        return response.data
    } catch (error) {
        throw error.response.data
    }
};



export const logout = async () => {
    try{
        const response = await axios.post('${API_URL}logout/');
        return response.data
    } catch (error) {
        throw error.response.data
    }
};


export const getProfile = async ()  => {
    try{
        const response = await axios.get('${API_URL}profile/');
        return response.data
    }catch(error){
        throw error.response.data
    }
};


export const updateProfile = async () => {
    try{
        const response = await axios.put('${API_URL}profile/');
        return response.data
    }catch(error){
        throw error.response.data
    }
}