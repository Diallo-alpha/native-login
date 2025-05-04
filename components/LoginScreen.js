import React, { useContext, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';

/**
 * Écran de connexion
 * Permet aux utilisateurs de se connecter avec leurs identifiants
 */
function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  /**
   * Gère la tentative de connexion
   * Vérifie les identifiants et redirige vers le profil si connexion réussie
   */
  const handleLogin = () => {
    // Réinitialiser les erreurs et afficher l'indicateur de chargement
    setError('');
    setIsLoading(true);
    
    // Simuler un délai réseau
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        login({ username: 'admin', email: 'admin@example.com', role: 'admin' });
        navigation.navigate('Profile'); // Naviguer vers ProfileScreen après connexion réussie
      } else if (username === 'user' && password === 'user123') {
        login({ username: 'user', email: 'user@example.com', role: 'user' });
        navigation.navigate('Profile'); // Naviguer vers ProfileScreen après connexion réussie
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Connexion</Text>
        <Text style={styles.headerSubtitle}>Entrez vos identifiants pour accéder à votre compte</Text>
      </View>
      
      {/* Formulaire de connexion */}
      <View style={styles.form}>
        {/* Afficher les erreurs s'il y en a */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        {/* Champ nom d'utilisateur */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nom d'utilisateur</Text>
          <TextInput
            placeholder="Entrez votre nom d'utilisateur"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
        
        {/* Champ mot de passe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            placeholder="Entrez votre mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
        
        {/* Bouton de connexion */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Se connecter</Text>
          )}
        </TouchableOpacity>
        
        {/* Aide à la connexion */}
        <Text style={styles.helpText}>
          Pour tester: utiliser admin/admin123 ou user/user123
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
  header: {
    backgroundColor: '#3498db',
    padding: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
  form: {
    padding: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
  },
  helpText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 14,
  },
});

export default LoginScreen;
