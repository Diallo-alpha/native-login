import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AuthContext } from './AuthProvider';

/**
 * Écran protégé accessible uniquement aux administrateurs
 * Contrôle l'accès en fonction du rôle de l'utilisateur
 */
function ProtectedScreen() {
  const { user } = useContext(AuthContext);
  
  // Si aucun utilisateur n'est connecté
  if (!user) {
    return (
      <View style={styles.errorContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>🔒</Text>
        </View>
        <Text style={styles.errorText}>
          Veuillez vous connecter pour accéder à cet écran.
        </Text>
      </View>
    );
  }
  
  // Si l'utilisateur est un administrateur
  if (user.role === 'admin') {
    return (
      <View style={styles.container}>
        <View style={styles.successHeader}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>✅</Text>
          </View>
          <Text style={styles.successTitle}>Accès autorisé</Text>
        </View>
        
        <View style={styles.contentBox}>
          <Text style={styles.welcomeText}>
            Bienvenue Administrateur !
          </Text>
          <Text style={styles.contentText}>
            Vous avez accès à toutes les fonctionnalités réservées aux administrateurs.
            Cet écran est visible uniquement pour les utilisateurs avec le rôle "admin".
          </Text>
        </View>
      </View>
    );
  }

  // Si l'utilisateur n'a pas les droits d'administrateur
  return (
    <View style={styles.errorContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>⛔</Text>
      </View>
      <Text testID='accessDeniedMessage' style={styles.errorText}>
        Accès refusé. Seuls les administrateurs peuvent voir cet écran.
      </Text>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Votre rôle actuel: {user.role}
        </Text>
        <Text style={styles.infoText}>
          Contactez un administrateur pour obtenir les autorisations nécessaires.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  successHeader: {
    backgroundColor: '#2ecc71',
    padding: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  contentBox: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  welcomeText: {
    fontSize: 22,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  contentText: {
    fontSize: 16,
    color: '#7f8c8d',
    lineHeight: 24,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  iconText: {
    fontSize: 40,
  },
  infoBox: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    width: '100%',
    marginTop: 20,
  },
  infoText: {
    color: '#34495e',
    fontSize: 14,
    marginBottom: 5,
  }
});

export default ProtectedScreen;
