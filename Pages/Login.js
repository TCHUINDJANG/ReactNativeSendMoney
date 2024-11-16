import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert , Image} from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Gère l'état de chargement

  // URL de l'API Django pour l'authentification (assure-toi d'utiliser la bonne URL)
  const API_URL = 'http://127.0.0.1:8000/accounts/login/'; // Remplace avec l'URL réelle

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSubmit = async () => {
    if (!username || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        username,
        password,
      });

      // Si la connexion réussit
      if (response.status === 200) {
        Alert.alert('Connexion réussie', 'Bienvenue !');
        // Tu peux sauvegarder le token dans le stockage local ou un gestionnaire d'état
        // Exemple avec AsyncStorage
        // await AsyncStorage.setItem('token', response.data.token);

        navigation.navigate('Dashbord'); // Navigue vers le tableau de bord
      }
    } catch (error) {
      // En cas d'erreur d'authentification
      console.error(error);
      Alert.alert('Erreur', 'Nom d\'utilisateur ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      {/* Image juste au-dessus du bouton de création */}
      <Image 
        source={require('../assets/imagessend.png')} // Remplace par le chemin de ton image locale ou URL
        style={styles.logo} 
      />


      <Text style={styles.subtitle}>Veuillez entrer vos identifiants</Text>

      {/* Champ pour le nom d'utilisateur */}
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
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

      {/* Bouton de connexion */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? <Text>Chargement...</Text> : <Text style={styles.buttonText}>Se connecter</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  logo: {
    width: 150, // Ajuste la taille de l'image selon tes besoins
    height: 150,
    alignSelf: 'center',
    marginBottom: 20, // Espace entre l'image et le formulaire
  },
});

export default LoginScreen;
