import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';

const SettingsScreen = () => {
  // Exemple de données utilisateur
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = React.useState(true); // Simule l'état de la vérification en 2 étapes

  const toggleTwoFactor = () => setIsTwoFactorEnabled(!isTwoFactorEnabled);

  return (
    <ScrollView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Paramètres</Text>
      </View>
 
      {/* Paramètres de sécurité */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sécurité</Text>

        {/* Vérification en 2 étapes */}
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Vérification en 2 étapes</Text>
          <Switch
            value={isTwoFactorEnabled}
            onValueChange={toggleTwoFactor}
            thumbColor={isTwoFactorEnabled ? '#32cd32' : '#ccc'}
            trackColor={{ false: '#ccc', true: '#a1e8a1' }}
          />
        </View>
      </View>

      {/* Paramètres du compte */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compte</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Modifier l'e-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Modifier le mot de passe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Modifier le numéro de téléphone</Text>
        </TouchableOpacity>
      </View>

      {/* Aide et support */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aide et support</Text>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>Contacter le support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingLabel}>FAQ</Text>
        </TouchableOpacity>
      </View>

      {/* Déconnexion */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#555',
  },
  logoutButton: {
    backgroundColor: '#ff6347', // Couleur rouge pour la déconnexion
    padding: 14,
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
