import axios from "axios";


const BASE_URL = ""



export const getTransaction = async(token) => {
    return await axios.get(BASE_URL , {headers: {Authorization:'Baerer ${token}'}});
};

export const createTransaction = async (transaction , token) => {
    return await axios.post(BASE_URL, transaction , {headers: {Authorization:'Baerer ${token}'}})
}

export const getTransactionDetails  = async(id ,token) => {
    return await axios.get('${BASE_URL}${id}/' , {headers: {Authorization:'Baerer ${token}'}});
};

export const updateTransaction = async(id ,token , transaction) => {
    return await axios.put('${BASE_URL}${id}/' ,transaction,  {headers: {Authorization:'Baerer ${token}'}});
};

export const deleteTransaction = async(id ,token , transaction) => {
    return await axios.delete('${BASE_URL}${id}/' ,transaction,  {headers: {Authorization:'Baerer ${token}'}});
};