# Utilisation de l'API

## Créer une nouvelle habitude

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

## Récupérer toutes les habitudes

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

## Créer une entrée

**Méthode :** `POST`
**URL :** `http://localhost:3000/api/v1/entries/:id`
**Paramètre :** `:id` correspond à l'ID de l'habitude à laquelle on souhaite ajouter une entrée

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `POST`, copier l'URL sur `http://localhost:3000/api/v1/entries/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
{
  "habit_id": "68dbaebbc7dc0bfb7f8e3e5f",
  "_id": "68dce03016c9ee4f3942584a",
  "date": "2025-10-01T08:02:56.315Z",
  "__v": 0
}
```

## Récupérer toutes les entrées d'une habitude

**Méthode :** `GET`
**URL :** `http://localhost:3000/api/v1/entries/:id`
**Paramètre :** `:id` correspond à l'ID de l'habitude dont on souhaite récupérer les entrées

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `GET`, copier l'URL sur `http://localhost:3000/api/v1/entries/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
[
  {
    "_id": "68dce03016c9ee4f3942584a",
    "habit_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "date": "2025-10-01T08:02:56.315Z",
    "__v": 0
  },
  {
    "_id": "68dce05016c9ee4f3942584d",
    "habit_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "date": "2025-10-01T08:03:28.719Z",
    "__v": 0
  }
]
```

## Récupérer les entrées d'une habitude à une date précise

**Méthode :** `GET`
**URL :** `http://localhost:3000/api/v1/entries/:date/:id`
**Paramètres :** `:date` est à renseigner au format YYYY-MM-DD, `:id` correspond à l'ID de l'habitude dont on souhaite récupérer les entrées

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `GET`, copier l'URL sur `http://localhost:3000/api/v1/entries/:date/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
[
  {
    "_id": "68dce03016c9ee4f3942584a",
    "habit_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "date": "2025-10-01T08:02:56.315Z",
    "__v": 0
  },
  {
    "_id": "68dce05016c9ee4f3942584d",
    "habit_id": "68dbaebbc7dc0bfb7f8e3e5f",
    "date": "2025-10-01T08:03:28.719Z",
    "__v": 0
  }
]
```

## Supprimer une entrée

**Méthode :** `DELETE`
**URL :** `http://localhost:3000/api/v1/entries/:id`
**Paramètre :** `:id` correspond à l'ID de l'entrée à supprimer

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `DELETE`, copier l'URL sur `http://localhost:3000/api/v1/entries/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
{
  "message": "Entrée supprimée"
}
```

## Supprimer une habitude

**Méthode :** `DELETE`
**URL :** `http://localhost:3000/api/v1/habits/:id`
**Paramètre :** `:id` correspond à l'ID de l'habitude à supprimer

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `DELETE`, copier l'URL sur `http://localhost:3000/api/v1/habits/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
{
  "message": "Suppression de Se brosser les dents réussie"
}
```

## Supprimer toutes les entrées d'une habitude

**Méthode :** `DELETE`
**URL :** `http://localhost:3000/api/v1/entries/habit/:id`
**Paramètre :** `:id` correspond à l'ID de l'habitude dont on souhaite supprimer les entrées

**Étapes dans Thunder Client :**

- Cliquer sur "New Request"
- Méthode `DELETE`, copier l'URL sur `http://localhost:3000/api/v1/entries/habit/:id`
- Cliquer sur **Send**

**Réponse attendue :**

```json
{
  "message": "Entrées supprimées"
}
```