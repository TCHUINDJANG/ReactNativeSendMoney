 import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assure-toi d'utiliser correctement Ionicons

import HomeScreen from './Home';
import ProfileScreen from './Profile';
import SettingsScreen from './Settings';
import NotificationsScreen from './Notifications';
import LoginScreen from './Login';
import RegisterScreen from './Signup';
import CountrySelectScreen from './CountrySelectScreen';

// Sections pour le Dashboard
const HomeSection = () => (
  <View style={styles.section}>
    <HomeScreen />
  </View>
);

const ProfileSection = () => (
  <View style={styles.section}>
    <ProfileScreen />
  </View>
);

const SettingsSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Paramètres</Text>
    <Text style={styles.sectionContent}>Gérer les préférences et options de votre compte.</Text>
    <SettingsScreen />
  </View>
);

const AnalyticsSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Analytique</Text>
    <Text style={styles.sectionContent}>Voir les historiques de vos transactions et dépenses.</Text>
  </View>
);

const NotificationSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Notifications</Text>
    <Text style={styles.sectionContent}>Recevez les notifications des transferts et des offres spéciales.</Text>
    <NotificationsScreen />
  </View>
);


const LoginSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Register</Text>
    <Text style={styles.sectionContent}>Recevez les notifications des transferts et des offres spéciales.</Text>
    <LoginScreen />
  </View>
);


const RegisterSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Login</Text>
    <Text style={styles.sectionContent}>Recevez les notifications des transferts et des offres spéciales.</Text>
    <RegisterScreen />
  </View>
);



const Dashbord = () => {
  const [activateSection, setActivateSection] = useState('Home'); // Section activée

  // Fonction pour rendre la section en fonction de l'état
  const renderSection = () => {
    switch (activateSection) {
      case 'Profile':
        return <ProfileSection />;
      case 'Settings':
        return <SettingsSection />;
      case 'Analytics':
        return <AnalyticsSection />;
      case 'Notification':
        return <NotificationSection />;
      case 'Register':
        return <LoginSection />;
      case 'Login':
        return <RegisterSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Section de contenu dynamique */}
      <ScrollView style={styles.content}>
        {renderSection()}
      </ScrollView>

      {/* Barre de navigation en bas */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setActivateSection('Home')} style={styles.navButton}>
          <Ionicons name="home" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Profile')} style={styles.navButton}>
          <Ionicons name="person" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Settings')} style={styles.navButton}>
          <Ionicons name="settings" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Paramètres</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Analytics')} style={styles.navButton}>
          <Ionicons name="bar-chart" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Analytique</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Notification')} style={styles.navButton}>
          <Ionicons name="notifications" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Register')} style={styles.navButton}>
          <Ionicons name="register" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActivateSection('Login')} style={styles.navButton}>
          <Ionicons name="login" size={30} color="#fff" />
          <Text style={styles.navButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'flex-start', // Cela assure que le contenu occupe tout l'espace disponible
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00BFFF',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 60, // Pour éviter que le contenu ne soit masqué par la barre de navigation
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
});

export default Dashbord;
