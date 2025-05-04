# Application d'Authentification React Native

Une application mobile développée avec React Native qui implémente un système d'authentification complet avec des écrans protégés par rôle.

## 📱 Fonctionnalités

- **Écran d'accueil** avec interface utilisateur moderne
- **Système d'authentification** avec gestion des utilisateurs et des rôles
- **Profils utilisateurs** différenciés selon le rôle (administrateur ou utilisateur standard)
- **Écrans protégés** accessibles uniquement aux administrateurs
- **Interface utilisateur responsive** avec des animations fluides
- **Messages d'erreur** informatifs pour guider l'utilisateur

## 🔧 Technologies utilisées

- React Native
- React Navigation
- Context API pour la gestion de l'état d'authentification

## 🚀 Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/Diallo-alpha/native-login.git
```

## 📂 Structure du projet

LoginAuthentication/
├── components/
│   ├── HomeScreen.js       # Écran d'accueil
│   ├── LoginScreen.js      # Écran de connexion
│   ├── ProfileScreen.js    # Écran de profil utilisateur
│   ├── ProtectedScreen.js  # Écran accessible uniquement aux administrateurs
│   └── AuthProvider.js     # Contexte de gestion de l'authentification
├── App.js                  # Point d'entrée de l'application
└── README.md               # Ce fichier