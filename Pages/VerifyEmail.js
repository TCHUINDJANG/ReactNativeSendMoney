import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/verification/';  // Changez cette URL selon l'adresse de votre backend

const EmailVerificationScreen = () => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendCode = async () => {
    try {
      const response = await axios.post(`${API_URL}send-code/`, { email });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      Alert.alert('Error', error.response?.data?.error || 'Something went wrong');
    }
  };

  const verifyCode = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_URL}verify-code/`, { email, code });
      Alert.alert('Success', response.data.message);
      setIsLoading(false);
    } catch (error){

    }
}


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vérification de l'Email</Text>
      <Text style={styles.subHeader}>Entrez le code de vérification envoyé à votre adresse email :</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Code de vérification"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        maxLength={6}  // Limiter à 6 caractères (par exemple)
      />
      
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <View style={styles.button}>
          {isLoading ? (
            <Text style={styles.buttonText}>Chargement...</Text>
          ) : (
            <Text style={styles.buttonText}>Vérifier</Text>
          )}
        </View>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => Alert.alert('Réenvoyer', 'Un nouveau code a été envoyé.')}>
          <Text style={styles.resendText}>Réenvoyer le code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    paddingLeft: 15,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
  },
  resendText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default EmailVerificationScreen;
