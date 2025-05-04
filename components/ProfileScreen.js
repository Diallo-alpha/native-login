import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from './AuthProvider';

/**
 * Écran de profil utilisateur
 * Affiche les informations de l'utilisateur connecté et permet la déconnexion
 */
function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);
  
  // Si aucun utilisateur n'est connecté, afficher un message pour se connecter
  if (!user) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.notLoggedInText}>Veuillez vous connecter pour voir votre profil</Text>
      </View>
    );
  }
  
  // Déterminer les couleurs en fonction du rôle
  const isAdmin = user.role === 'admin';
  const roleColor = isAdmin ? '#e74c3c' : '#3498db';
  const roleBadgeText = isAdmin ? 'Administrateur' : 'Utilisateur';

  return (
    <View style={styles.container}>
      {/* En-tête du profil */}
      <View style={[styles.header, { backgroundColor: roleColor }]}>
        <View style={styles.avatarContainer}>
          {/* Avatar générique pour l'utilisateur */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{user.username.charAt(0).toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.welcomeText}>Bienvenue, {user.username} !</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleText}>{roleBadgeText}</Text>
        </View>
      </View>
      
      {/* Informations du profil */}
      <View style={styles.profileInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nom d'utilisateur:</Text>
          <Text style={styles.infoValue}>{user.username}</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Rôle:</Text>
          <Text style={[styles.infoValue, { color: roleColor }]}>{user.role}</Text>
        </View>
      </View>
      
      {/* Bouton de déconnexion */}
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    padding: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 35,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#34495e',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  roleBadge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  roleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  notLoggedInText: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileInfo: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },
  infoItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ProfileScreen;
