import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ProfileScreen = () => {
  const [profile, setProfile] = useState(null);
  const [bio, setBio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(true);


  // Configuration des headers, y compris le token JWT pour l'authentification
const getAuthHeaders = (token) => ({
  headers: {
    Authorization: 'Bearer ${token}',
  },
});


  // Récupérer les données du profil utilisateur
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: 'Bearer ${yourAuthToken}',  // Assure-toi d'utiliser un token JWT ou un autre mécanisme d'authentification
          },
        });
        setProfile(response.data);
        setBio(response.data.bio);
        setPhoneNumber(response.data.phone_number);
        setAvatar(response.data.avatar);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Fonction pour mettre à jour le profil
  const updateProfile = async () => {
    try {
      const response = await axios.put(
        API_URL,
        { bio, phone_number: phoneNumber, avatar },
        {
          headers: {
            Authorization: `Bearer ${yourAuthToken}`,
          },
        }
      );
      setProfile(response.data);
      alert('Profil mis à jour !');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la mise à jour du profil');
    }
  };

  if (loading) {
    return <Text>Chargement...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      {avatar && (
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      )}
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setBio}
        placeholder="Bio"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Numéro de téléphone"
        keyboardType="phone-pad"
      />
      <Button title="Mettre à jour le profil" onPress={updateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ProfileScreen;
