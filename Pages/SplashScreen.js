import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Animated, Easing } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';  // Assurez-vous d'avoir installé ce module

const Splash = ({ navigation }) => {
  // Animation pour la transparence du logo et la taille (zoom)
  const fadeAnim = new Animated.Value(0);  // Animation pour l'opacité du logo
  const scaleAnim = new Animated.Value(0.8); // Valeur initiale de l'échelle, légèrement réduite

  useEffect(() => {
    // Animation combinée de fade-in et de zoom
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,  // L'opacité passe de 0 à 1
        duration: 2000,  // Durée de l'animation
        easing: Easing.ease,  // Easing pour une transition fluide
        useNativeDriver: true,  // Utilisation du moteur natif pour des performances optimales
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,  // L'échelle passe de 0.8 à 1
        duration: 2000,  // Durée de l'animation
        easing: Easing.ease,  // Easing pour un zoom fluide
        useNativeDriver: true,  // Utilisation du moteur natif
      }),
    ]).start();

    // Après 3 secondes, cacher l'écran de splash et naviguer vers la page "Home"
    setTimeout(() => {
      SplashScreen.hide();
      navigation.replace('Dashbord');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* La barre de statut avec un fond bleu */}
      <StatusBar barStyle="light-content" backgroundColor="#ff8c00" />
      
      {/* Logo animé avec fade-in et zoom */}
      <Animated.Image
        source={require('../assets/imagessend.png')}  // Assurez-vous d'avoir cette image dans votre dossier "assets"
        style={[styles.logo, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}  // Applique les animations
      />

      {/* Texte animé avec fade-in */}
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Transfert d'argent rapide et sécurisé
      </Animated.Text>
    </View>
  );
};

// Style du SplashScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8c00',  // Couleur de fond bleu attrayante
  },
  logo: {
    width: 200,  // Taille du logo
    height: 200,  // Taille du logo
    marginBottom: 30,  // Espacement en bas
    borderRadius: 20,  // Bords arrondis pour un effet moderne
    borderWidth: 3,  // Bordure autour du logo
    borderColor: 'white',  // Couleur de la bordure
  },
  text: {
    fontSize: 22,  // Taille de la police
    color: 'white',  // Couleur du texte
    textAlign: 'center',  // Centrer le texte
    fontWeight: '600',  // Poids du texte pour plus de clarté
    marginTop: 20,  // Espacement au-dessus du texte
    fontFamily: 'Roboto',  // Police moderne (à ajuster si nécessaire)
    letterSpacing: 1,  // Espacement entre les lettres
  },
});

export default Splash;
