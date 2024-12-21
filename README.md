# Réseau Social Professionnel Local

Application de mise en réseau pour les professionnels locaux (artisans, associations, PME) avec cartographie interactive.

## Contribution au projet

### Important : Gestion des modifications

Toutes les modifications doivent être faites via des push Git :

```bash
# Cloner le projet
git clone https://github.com/Tsumyko/reseau-social-pro.git

# Créer une nouvelle branche pour vos modifications
git checkout -b ma-fonctionnalite

# Faire vos modifications

# Ajouter les fichiers modifiés
git add .

# Commiter les changements
git commit -m "Description des modifications"

# Pousser les modifications
git push origin ma-fonctionnalite
```

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

4. Authentification
   - Système de connexion/inscription
   - Gestion JWT
   - Protection des routes
   - Store Redux auth

5. Backend
   - Configuration Express/Node.js
   - Configuration MongoDB
   - API REST (auth, posts)
   - Middleware d'authentification

6. Fonctionnalités sociales
   - Système d'actualités (posts)
   - Filtrage géographique des posts
   - Gestion des catégories

### 🚧 En cours / À faire
1. Fonctionnalités sociales
   - [ ] Gestion des profils professionnels
   - [ ] Système de messagerie
   - [ ] Notifications
   - [ ] Commentaires sur les posts

2. Optimisations
   - [ ] Performance de la carte
   - [ ] Mise en cache
   - [ ] Optimisation des images
   - [ ] SEO

## Configuration requise

1. Frontend (.env) :
```env
VITE_GOOGLE_MAPS_API_KEY=votre_clé_api_google_maps
```

2. Backend (server/.env) :
```env
MONGODB_URI=mongodb://localhost:27017/reseau-social-pro
JWT_SECRET=votre_secret_jwt
PORT=5000
```

## Installation et lancement

1. Frontend :
```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev
```

2. Backend :
```bash
# Dans le dossier server
cd server

# Installation des dépendances
npm install

# Lancement en développement
npm run dev
```

## Structure des fichiers actuelle

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Layout.tsx
│   │   ├── map/
│   │   │   ├── Map.tsx
│   │   │   └── MapFilters.tsx
│   │   └── posts/
│   │       └── PostCard.tsx
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── Signup.tsx
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   └── Feed.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── posts.ts
│   ├── store/
│   │   ├── index.ts
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       └── mapSlice.ts
│   └── App.tsx
└── server/
    ├── src/
    │   ├── models/
    │   │   ├── User.ts
    │   │   └── Post.ts
    │   ├── routes/
    │   │   ├── auth.ts
    │   │   └── posts.ts
    │   ├── middleware/
    │   │   └── auth.ts
    │   └── index.ts
    └── package.json
```

## Prochaines étapes

1. Système de messagerie
   - Chat en temps réel avec Socket.io
   - Liste des conversations
   - Notifications

2. Profils professionnels
   - Page profil détaillée
   - Upload d'images
   - Géolocalisation des entreprises

3. Optimisations
   - Performance
   - UX/UI
   - Tests
