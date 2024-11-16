import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';

const NotificationsScreen = () => {
  // Exemple de données utilisateur pour les préférences de notifications
  const [transactionNotificationEnabled, setTransactionNotificationEnabled] = React.useState(true);
  const [promotionNotificationEnabled, setPromotionNotificationEnabled] = React.useState(false);
  const [securityAlertEnabled, setSecurityAlertEnabled] = React.useState(true);

  // Fonction pour activer/désactiver les notifications
  const toggleTransactionNotification = () => setTransactionNotificationEnabled(!transactionNotificationEnabled);
  const togglePromotionNotification = () => setPromotionNotificationEnabled(!promotionNotificationEnabled);
  const toggleSecurityAlert = () => setSecurityAlertEnabled(!securityAlertEnabled);

  return (
    <ScrollView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gestion des notifications</Text>
      </View>

      {/* Section Notifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications de transactions</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Recevoir une notification lors de chaque transaction</Text>
          <Switch
            value={transactionNotificationEnabled}
            onValueChange={toggleTransactionNotification}
            thumbColor={transactionNotificationEnabled ? '#32cd32' : '#ccc'}
            trackColor={{ false: '#ccc', true: '#a1e8a1' }}
          />
        </View>
      </View>

      {/* Section Promotions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Promotions</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Recevoir des notifications de promotions et offres spéciales</Text>
          <Switch
            value={promotionNotificationEnabled}
            onValueChange={togglePromotionNotification}
            thumbColor={promotionNotificationEnabled ? '#32cd32' : '#ccc'}
            trackColor={{ false: '#ccc', true: '#a1e8a1' }}
          />
        </View>
      </View>

      {/* Section Alertes de sécurité */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alertes de sécurité</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Recevoir des alertes en cas d'activités suspectes</Text>
          <Switch
            value={securityAlertEnabled}
            onValueChange={toggleSecurityAlert}
            thumbColor={securityAlertEnabled ? '#32cd32' : '#ccc'}
            trackColor={{ false: '#ccc', true: '#a1e8a1' }}
          />
        </View>
      </View>

      {/* Bouton de réinitialisation */}
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Réinitialiser les préférences</Text>
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
  resetButton: {
    backgroundColor: '#ff6347', // Couleur rouge pour la réinitialisation
    padding: 14,
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotificationsScreen;
