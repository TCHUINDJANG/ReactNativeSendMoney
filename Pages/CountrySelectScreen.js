// CountrySelect.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal'; // Import de la bibliothèque de sélection de pays

// Liste de pays (exemple simplifié, avec code ISO pour chaque pays)
const countries = [
  { id: 'US', name: 'États-Unis' },
  { id: 'FR', name: 'France' },
  { id: 'DE', name: 'Allemagne' },
  { id: 'ES', name: 'Espagne' },
  { id: 'CA', name: 'Canada' },
  { id: 'GB', name: 'Royaume-Uni' },
  // Ajoutez ici d'autres pays selon vos besoins
];

const CountrySelectScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null); // Pour stocker le pays sélectionné

  // Fonction pour gérer la sélection d'un pays
  const handleCountrySelect = (country) => {
    setSelectedCountry(country); // Mettre à jour le pays sélectionné
    alert(`Vous avez sélectionné: ${country.name}`); // Afficher une alerte ou aller à la page suivante
    navigation.goBack(); // Retour à la page précédente
  };

  // Rendu d'un élément de la liste de pays avec leur drapeau
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleCountrySelect(item)}>
      <View style={styles.itemContent}>
        <CountryPicker
          countryCode={item.id} // Code ISO du pays (ex: 'US', 'FR')
          withFlag
          withCountryNameButton={false}
          withAlphaFilter={false}
          withCallingCode={false}
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionner un pays</Text>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
});

export default CountrySelectScreen;
