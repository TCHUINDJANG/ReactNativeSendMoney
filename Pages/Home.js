import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native';

const HomeScreen = () => {
  // Exemple de données utilisateur
  const user = {
    name: 'Dimitri Ivanov',
    balance: 50000, // Solde en roubles
    transactions: [
      { id: '1', amount: 2000, date: '10 Nov 2024', status: 'Envoyé', receiver: 'Maria' },
      { id: '2', amount: 1500, date: '8 Nov 2024', status: 'Reçu', sender: 'Alexei' },
      { id: '3', amount: 10000, date: '5 Nov 2024', status: 'Envoyé', receiver: 'Natalia' },
    ]
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionAmount}>{item.amount} ₽</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={[styles.transactionStatus, item.status === 'Envoyé' ? styles.sent : styles.received]}>
        {item.status} {item.status === 'Envoyé' ? `à ${item.receiver}` : `de ${item.sender}`}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenue, {user.name}</Text>
        <Text style={styles.balanceText}>Solde actuel: {user.balance} ₽</Text>
      </View>

      {/* Transfert rapide */}
      <TouchableOpacity style={styles.quickTransferButton}>
        <Text style={styles.quickTransferText}>Envoyer de l'argent</Text>
      </TouchableOpacity>

      {/* Derniers transferts */}
      <View style={styles.transactionsSection}>
        <Text style={styles.transactionsTitle}>Derniers transferts</Text>
        <FlatList
          data={user.transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Raccourcis */}
      <View style={styles.shortcutsSection}>
        <Text style={styles.shortcutsTitle}>Raccourcis</Text>
        <View style={styles.shortcutsRow}>
          <TouchableOpacity style={styles.shortcutButton}>
            <Text style={styles.shortcutText}>Historique</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcutButton}>
            <Text style={styles.shortcutText}>Paramètres</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Développé par David Tankeu</Text>
      </View>
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
    alignItems: 'center',
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceText: {
    fontSize: 20,
    color: '#2d8a8a',
  },
  quickTransferButton: {
    backgroundColor: '#ff8c00',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  quickTransferText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionsSection: {
    marginBottom: 24,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: '#777',
  },
  transactionStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sent: {
    color: '#ff6347', // Rouge pour les transferts envoyés
  },
  received: {
    color: '#32cd32', // Vert pour les transferts reçus
  },
  shortcutsSection: {
    marginBottom: 32,
  },
  shortcutsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  shortcutsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortcutButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '48%',
  },
  shortcutText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
});

export default HomeScreen;
