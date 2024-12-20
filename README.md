# Réseau Social Professionnel Local

Application de mise en réseau pour les professionnels locaux (artisans, associations, PME) avec cartographie interactive.

## État d'avancement du projet

### ✅ Complété
1. Structure du projet
   - Configuration TypeScript et Vite
   - Configuration Tailwind CSS
   - Structure des dossiers
   - Dépendances de base

2. Interface utilisateur de base
   - Layout principal avec menu latéral
   - Composant de navigation responsive
   - Pages de base (Home, Profile)

3. Composant Carte
   - Intégration Google Maps
   - Système de marqueurs
   - Fenêtres d'information
   - Filtres de recherche
   - État Redux pour la carte

### 🚧 En cours / À faire
1. Authentification
   - [ ] Système de connexion
   - [ ] Inscription
   - [ ] Gestion des profils
   - [ ] Protection des routes

2. Backend
   - [ ] Configuration Express/Node.js
   - [ ] Configuration MongoDB
   - [ ] API REST
   - [ ] Middleware d'authentification

3. Fonctionnalités sociales
   - [ ] Système d'actualités
   - [ ] Gestion des profils professionnels
   - [ ] Système de messagerie
   - [ ] Notifications

4. Optimisations
   - [ ] Performance de la carte
   - [ ] Mise en cache
   - [ ] Optimisation des images
   - [ ] SEO

## Comment exécuter le projet

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev
```

## Configuration requise

Créez un fichier `.env` à la racine du projet avec :
```env
VITE_GOOGLE_MAPS_API_KEY=votre_clé_api_google_maps
```

## Points de reprise

Pour continuer le développement :

1. Implémentation de l'authentification
   - Créer les composants de connexion/inscription
   - Mettre en place le système d'authentification avec JWT
   - Protéger les routes

2. Développement du backend
   - Configuration du serveur Express
   - Mise en place de la base de données MongoDB
   - Création des API nécessaires

3. Système d'actualités
   - Composants de création/édition d'actualités
   - Flux d'actualités
   - Filtrage par catégorie

## Structure des fichiers actuelle

```
src/
├── components/
│   ├── layout/
│   │   └── Layout.tsx
│   └── map/
│       ├── Map.tsx
│       └── MapFilters.tsx
├── pages/
│   ├── Home.tsx
│   └── Profile.tsx
├── store/
│   ├── index.ts
│   └── slices/
│       └── mapSlice.ts
└── App.tsx
```

## Prochaines étapes recommandées

1. Mettre en place l'authentification
2. Développer le backend avec Express et MongoDB
3. Implémenter la gestion des actualités
4. Ajouter la messagerie entre professionnels