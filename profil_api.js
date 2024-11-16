import axios from "axios";


const BASE_URL = "http://127.0.0.1:8000/accounts/profile/"


export const getAllProfile = async(token) => {
    return await axios.get(BASE_URL , {headers: {Authorization:'Baerer ${token}'}});
};
export const createProfile = async (profile , token) => {
    return await axios.post('${BASE_URL}create/', profile , {headers: {Authorization:'Baerer ${token}'}})
}

export const getProfileById  = async(id ,token) => {
    return await axios.get('${BASE_URL}${id}/' , {headers: {Authorization:'Baerer ${token}'}});
};

export const updateProfile = async(id ,token , profile) => {
    return await axios.put('${BASE_URL}${id}/' ,profile,  {headers: {Authorization:'Baerer ${token}'}});
};

export const deleteProfile = async(id ,token , profile) => {
    return await axios.delete('${BASE_URL}${id}/' ,profile,  {headers: {Authorization:'Baerer ${token}'}});
};