# Suivi d'Habitudes

- **Concept :** Une application pour cocher chaque jour si on a réalisé une habitude (ex: "Boire 2L d'eau").
- **Données :** Habitude (id, nom), Entrée (id, habitude_id, date).
- **Opérations CRUD :**
  - `CREATE` : Ajouter une nouvelle habitude à suivre.
  - `READ` : Lister les habitudes et leurs entrées pour un jour donné.
  - `UPDATE` : (Ici, l'update est moins pertinent, on se concentre sur C/R/D).
  - `DELETE` : Marquer une habitude comme "réalisée" pour aujourd'hui (ce qui revient à un CREATE d'une entrée) ou supprimer une habitude.

## Les endpoints

GET     `/habits`             : Pour récupérer toutes les habitudes
GET     `/entries`            : Pour récupérer toutes les entrées
GET     `/habits/:date`       : Pour récupérer les habitudes d'une journée précise
GET     `/entries/:date`      : Pour récupérer les entrées d'une journée précise
GET     `/entries/:date/:id`  : Pour récupérer les entrées d'une journée précise et d'une habitude précise
POST    `/habits`             : Pour créer une nouvelle habitude
POST    `/entries/:id`        : Pour Créer une nouvelle entrée d'une habitude
DELETE  `/habits/:id`         : Pour supprimer une habitude

## User stories

- En tant qu'utilisateur, je veux ajouter une habitude afin de mieux m'y tenir
- En tant qu'utilisateur, je veux ajouter une entrée à mon habitude afin de confirmer que je l'ai bien réalisée
- En tant qu'utilisateur, je veux voir toutes mes habitudes afin de savoir ce que j'ai à faire pour la journée
- En tant qu'utilisateur, je veux voir toutes mes entrées afin de voir quelles habitudes ont été remplies
- En tant qu'utilisateur, je veux pouvoir supprimer une habitude afin de ne pas m'encombrer d'habitude que je ne suis plus

## Schema de données

- Habitude :
  - ID : Identifiants unique de l'élément Habitude (String)
  - Nom : Contenu textuel de l'habitude (String)
- Entrée :
  - ID : Identifiants unique de l'élément Entrée (String)
  - Date : Quand l'entrée a été enregistrée (Date)
  - ID_Habitude : Identifiant unique de l'habitude liée à l'entrée (String)