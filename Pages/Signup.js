import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'; // Assure-toi d'avoir installé axios

const RegisterScreen = ({ navigation }) => {
  // États pour les champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false); // Pour gérer l'état de chargement

  // Liste des pays (simplifiée pour l'exemple)
  const countries = [
    { label: 'France', value: 'FR' },
    { label: 'États-Unis', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Allemagne', value: 'DE' },
    { label: 'Espagne', value: 'ES' },
  ];

  // URL de l'API Django pour l'inscription (assure-toi de remplacer cette URL par celle de ton API)
  const API_URL = 'http://127.0.0.1:8000/accounts/register/'; 

  // Fonction pour envoyer les données au backend
  const handleSubmit = async () => {
    if (!username || !password || !selectedCountry) {
      Alert.alert('Erreur', 'Tous les champs doivent être remplis');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        username,
        password,
        country: selectedCountry, // Envoie le pays sélectionné
      });

      if (response.status === 201) {
        // Si l'inscription réussie
        Alert.alert('Succès', 'Votre compte a été créé avec succès');
        navigation.navigate('LoginScreen'); // Redirige vers l'écran de connexion après inscription
      }
    } catch (error) {
      // En cas d'erreur lors de la requête
      console.error(error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>

      {/* Image juste au-dessus du bouton de création */}
      <Image 
        source={require('../assets/imagessend.png')} // Remplace par le chemin de ton image locale ou URL
        style={styles.logo} 
      />

      {/* Champ pour le nom d'utilisateur ou numéro de téléphone */}
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur ou téléphone"
        value={username}
        onChangeText={setUsername}
      />

      {/* Champ pour le mot de passe */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Champ pour l'email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Sélecteur de pays */}
      <RNPickerSelect
        placeholder={{
          label: 'Sélectionner un pays...',
          value: '',
        }}
        onValueChange={setSelectedCountry}
        items={countries}
        style={pickerSelectStyles.inputAndroid}
      />

      {/* Bouton pour soumettre le formulaire */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit} 
        disabled={loading}
      >
        {loading ? <Text>Chargement...</Text> : <Text style={styles.buttonText}>Créer mon Compte</Text>}
      </TouchableOpacity>
    </View>
  );
};

// Styles pour la page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 150, // Ajuste la taille de l'image selon tes besoins
    height: 150,
    alignSelf: 'center',
    marginBottom: 20, // Espace entre l'image et le formulaire
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ff8c00',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10,
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

// Styles pour le picker (sélecteur de pays)
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default RegisterScreen;
