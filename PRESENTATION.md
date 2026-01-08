# Présentation prête à l'emploi — Gestionnaire de tâches

Version optimisée pour une démonstration de 6–8 minutes. Lis le texte à voix haute, slide par slide.

Résumé (30s)
- Application front-end simple pour gérer des tâches : ajouter, supprimer, marquer complétée, filtrer. Persistance locale via `localStorage`. UI stylée et responsive.

Slides & notes (script)

Slide 1 — Titre (10s)
- "Gestionnaire de tâches" — objectif : prototype client-side pour organiser des tâches rapides.

Slide 2 — Stack & fichiers (20s)
- HTML (`index.html`) : structure + ressources (Google Fonts, Font Awesome).
- CSS (`styles.css`) : thème sombre/féminin, variables, animations, responsive.
- JS (`dom.js`) : logique : CRUD en local, filtres et interactions.

Slide 3 — Flux utilisateur (30s)
- Remplir le formulaire → `submit` → objet `task` créé → stocké dans `tasks` → `saveTasks()` (localStorage) → `renderTasks()` met à jour l'affichage.

Slide 4 — `renderTasks()` (1 min)
- Étapes clés : vider la liste, filtrer selon `currentFilter`, afficher état vide si besoin, créer chaque `task-card` avec icônes et boutons, attacher écouteurs (complete, delete), animer entrée.

Slide 5 — Interactions & persistence (45s)
- `complete-btn` : bascule `completed`, met à jour localStorage et UI.
- `delete-btn` : supprime l'élément du tableau puis sauvegarde.
- `#clearAllBtn` : confirmation puis suppression de toutes les tâches.

Slide 6 — UI & accessibilité (30s)
- Variables CSS pour thèmes — facilite maintenance.
- Focus states et `prefers-reduced-motion` gérés.
- Améliorations possibles : labels ARIA, gestion clavier complète.

Slide 7 — Démo live (2–3 min)
1. Démarrer un serveur local et ouvrir `index.html`.
2. Ajouter 4 tâches (exemples rapides).
3. Cliquer ✓ sur une carte → montrer badge "Complétée" et style.
4. Tester filtres (Toutes / Actives / Complétées).
5. Supprimer une tâche et recharger la page pour vérifier la persistance.
6. Cliquer "Supprimer tout" et montrer l'état vide.

Slide 8 — Questions techniques & réponses (30s)
- Où sont stockées les tâches ? `localStorage` → clé `tasks_v1`.
- Synchronisation multi-appareils ? Nécessite un backend/API.
- Extension simple : ajouter recherche, tri, ou sauvegarde serveur.

Slide 9 — Conclusion (15s)
- Fonctionnalités principales démontrées : CRUD local, filtres, animations, thème stylé.
- Prochaine étape recommandée : ajouter tests unitaires, endpoint pour synchronisation, et améliorer l'accessibilité.

Annexes rapides (à montrer dans la console si demandé)
- Voir la donnée :
```
JSON.parse(localStorage.getItem('tasks_v1'))
```
- Exemple d'objet task :
```
{
  titre: 'Faire les courses',
  sousTitre: 'Supermarché',
  message: 'Lait, oeufs',
  email: 'moi@example.com',
  date: '2026-01-10',
  completed: false
}
```

Fin.

Le fichier est prêt : [PRESENTATION.md](PRESENTATION.md).
Dis‑moi si tu veux une version prête pour slides (PowerPoint / Google Slides) ou des notes plus courtes pour chaque slide.
