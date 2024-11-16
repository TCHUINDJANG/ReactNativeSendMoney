import axios from "axios";
import React , {useState} from "react";
import { View , Text, TextInput, Alert} from 'react-native'


const AddInformation = ({ navigation }) => {
    const [ prenom , setPrenom] = useState('')
    const [nom , setNom] = useState('')
    const [numeroTelephone , setNumeroTelephone] = useState('')
    const [loading, setLoading] = useState(false); // Gère l'état de chargement



    const API_URL = 'http://127.0.0.1:8000/addinformation/';

    const handleSubmit = async () => {
        if(!prenom || !nom || !numeroTelephone ){
            Alert.alert('Erreur' , 'Veuillez remplir tous les champs');
            return;
        }

        setLoading(true);


        try{
            const response = await axios.post(API_URL , {
                prenom,
                nom,
                numeroTelephone,
            });

            if (response.status === 200){
                Alert.alert('Information ajoute' , 'Avec success');

                navigation.navigate('ConversionDevise')
            }

        }
        catch (error) {

        } finally {
            
        }
    }
}