import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/**
 * Écran d'accueil de l'application
 * Affiche un message de bienvenue et peut être personnalisé davantage
 */
function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* En-tête avec gradient */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenue sur l'Application</Text>
      </View>
      
      {/* Contenu principal */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bonjour et bienvenue !</Text>
        <Text style={styles.subtitle}>
          Connectez-vous pour accéder à toutes les fonctionnalités
        </Text>
      </View>
      
      {/* Pied de page */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 - Application d'authentification</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  footer: {
    padding: 15,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  footerText: {
    color: '#95a5a6',
    fontSize: 12,
  }
});
 
export default HomeScreen;
