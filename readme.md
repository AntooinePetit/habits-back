# API - Suivi d'Habitudes

![Node.js](https://img.shields.io/badge/Node-v22.14.0-green)
![npm](https://img.shields.io/badge/npm-v11.6.0-blue)
![Express](https://img.shields.io/badge/Express-v5.1.0-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-v8.0.14-green?logo=mongodb)

## Description

Cette API (Node.js + Express) permet de gérer des **habitudes quotidiennes** et de suivre leur réalisation.
Elle propose plusieurs routes pour créer, lire et supprimer des habitudes et leurs entrées.

## Schema de données

### Habitude :

- `id` : Identifiants unique (String)
- `name` : Contenu textuel de l'habitude (String)

### Entrée :

- `id` : Identifiants unique (String)
- `date` : Quand l'entrée a été enregistrée (Date)
- `habit_id` : Identifiant de l'habitude associée (String)

## Les endpoints

| Méthode | Endpoint                    | Description                                               |
| ------- | --------------------------- | --------------------------------------------------------- |
| GET     | `/api/v1/habits`            | Récupérer toutes les habitudes                            |
| GET     | `/api/v1/entries/:date/:id` | Récupérer les entrées d’une habitude pour une date donnée |
| GET     | `/api/v1/entries/:id`       | Récupérer toutes les entrées d’une habitude               |
| POST    | `/api/v1/habits`            | Créer une nouvelle habitude                               |
| POST    | `/api/v1/entries/:id`       | Créer une entrée pour une habitude                        |
| DELETE  | `/api/v1/habits/:id`        | Supprimer une habitude                                    |
| DELETE  | `/api/v1/entries/:id`       | Supprimer une entrée                                      |
| DELETE  | `/api/v1/entries/habit/:id` | Supprimer toutes les entrées liées à une habitude         |

## Prérequis

- Node.js >= 22.14.0
- npm >= 11.6.0
- MongoDB (local ou MongoDB Atlas)

### Configuration MongoDB

1. **MongoDB locale**

- Installer MongoDB : [https://www.mongodb.com/docs/manual/installation/](https://www.mongodb.com/docs/manual/installation/)
- Démarrer le serveur : `mongodb`
- URL de connexion : `mongodb://localhost:27017/habits`

2. **MongoDB Atlas (optionnel)**

- Créer un compte Atlas : [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Créer un cluster et une base de données `habits`
- Récupérer l’URI de connexion

## Installation

```bash
# Cloner le projet
git clone --recurse-submodules https://github.com/AntooinePetit/habits
cd habits/back

# Installer les dépendances
npm install

```

## Configuration

Créer un fichier `.env` ou modifier le fichier `.env.example` en `.env`.

```env
PORT=3000
MONGO_URI=<votre_uri_mongodb>
```

## Utilisation en local

```bash
node .\app.js
```

Par défaut, l'API tourne sur http://localhost:3000

## Exemples d'utilisation

### Créer une nouvelle habitude

**Méthode :** `POST`
**URL :** `http://localhost:3000/api/v1/habits`
**JSON :**

```json
{
  "name": "Boire 2L d'eau"
}
```

**Étapes dans Thunder Client :**

1. Installer l'extension **Thunder Client** dans VS Code.
2. Ouvrir Thunder Client dans VS Code.
3. Cliquer sur **New Request**.
4. Choisir la méthode `POST`.
5. Copier l'URL `http://localhost:3000/api/v1/habits`.
6. Aller dans **Body** -> **JSON** -> coller le JSON.
7. Cliquer sur **Send**.

**Réponse attendue :**

```json
{
  "habit": {
    "name": "Boire 2L d'eau",
    "_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "__v": 0
  }
}
```

### Récupérer toutes les habitudes

**Méthode :** `GET`
**URL :** `http://localhost:3000/api/v1/habits`

**Étapes dans Thunder Client :**

1. Nouvelle requête.
2. Méthode `GET`, copier l'URL `http://localhost:3000/api/v1/habits`.
3. Cliquer sur **Send**.

**Réponse attendue :**

```json
[
  {
    "_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "name": "Boire 2L d'eau",
    "__v": 0
  },
  {
    "_id": "68dbb00fc7dc0bfb7f8e3e61",
    "name": "Se brosser les dents",
    "__v": 0
  }
]
```

### Voir toutes les utilisations

Pour voir toutes les utilisations de l'API, rendez vous [ici](./DOCS.md).

## Structure

```bash
back/
├── controllers/
│   ├── entriesController.js
│   └── habitsController.js
├── models/
│   ├── entriesModel.js
│   └── habitsModel.js
├── routes/
│   ├── entriesRoutes.js
│   └── habitsRoutes.js
├── .env
├── app.js
├── db.js
├── package-lock.json
├── package.json
└── README.md
```

## Déploiement de l'application

### Faire un fork

- Se rendre sur le [repository](https://github.com/AntooinePetit/habits-back)
- Cliquer sur "Fork"
- Nommer le fork
- Cliquer sur "Create fork"

### Hébergement

- Se rendre sur Render :
  - Se connecter en utilisant un compte GitHub
  - Cliquer sur "Add new"
  - Choisir "Web Service"
  - Choisir le repository correspondant
  - Choisir les paramètres suivants :
    - Language : Node
    - Region : Frankfurt (EU Central) -- Si vous voulez être héberger en Europe
    - Build Command : `npm install`
    - Start Command : `node ./app.js`
    - Instance Type : Free
    - Environment Variables > Add from .env > Copier ici votre fichier .env créé plus tôt > Add variables
  - Cliquer sur "Deploy Web Service"
