document.addEventListener('DOMContentLoaded', function() {
    
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = JSON.parse(localStorage.getItem('tasks_v1') || '[]');

    // Met à jour le compteur affiché près du titre
    // Affiche le nombre total de tâches enregistrées
    function updateBadge() {
        let badge = document.querySelector('.count-badge');
        
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'count-badge';
            const h1 = document.querySelector('h1');
            h1.appendChild(badge);
}
        badge.textContent = tasks.length;
       }

         // Enregistre le tableau `tasks` dans localStorage
      function saveTasks() {
        localStorage.setItem('tasks_v1', JSON.stringify(tasks));
    }

   

      // Écouteur du formulaire d'ajout : récupère les valeurs
    // crée un objet tâche et sauvegarde
    // Les champs attendus  titre, sousTitre, message, email, date
 taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const titre = document.getElementById('titre').value;
        const sousTitre = document.getElementById('sousTitre').value;
        const message = document.getElementById('message').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;

        const task = {
            titre,
            sousTitre,
            message,
            email,
            date,
         completed: false
        };

         tasks.push(task);
         saveTasks();
         renderTasks();
         taskForm.reset();
    });

    // Rend la liste des tâches en appliquant le filtre courant.
    // Cette fonction reconstruit le DOM de la liste à chaque appel.
    function renderTasks() {
        taskList.innerHTML = '';
        updateBadge();

        const filtered = tasks.slice();

        // Pour chaque tâche, on crée une carte (élément DOM) depuis le JS
        filtered.forEach((task, i) => {
            const index = tasks.indexOf(task);
            const taskCard = document.createElement('div');
            taskCard.className = `task-card${task.completed ? ' completed' : ''}`;

  // Structure HTML de la carte de tâche
            taskCard.innerHTML = `
                <h3><i class="fa-solid fa-heart" style="color:var(--accent); margin-right:0.5rem;"></i>${task.titre}</h3>
                <p><strong>Sous-titre :</strong> ${task.sousTitre}</p>
                 <p><strong>Message :</strong> ${task.message}</p>
                <p><i class="fa-solid fa-envelope" style="width:1rem; color:var(--muted);"></i> ${task.email ? task.email : ''}</p>
                <p><i class="fa-solid fa-calendar-days" style="width:1rem; color:var(--muted);"></i> ${task.date ? task.date : ''}</p>
                <div class="task-meta">
                    <div>
                   <button class="delete-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            `;

            taskList.appendChild(taskCard);
           
      });

        // Attache le gestionnaire pour supprimer une tâche
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.dataset.index;
                // demande de confirmation avant suppression
                if (!confirm('Supprimer cette tâche ?')) return;
            // suppression de la tâche à l'index
             tasks.splice(index, 1);
             saveTasks();
            renderTasks();});
    });
        }

// Gestion du bouton "Supprimer tout" 
    document.addEventListener('click', function(e) {
        if (e.target.id === 'clearAllBtn' || e.target.closest('#clearAllBtn')) {
        if (!tasks.length) return;
       if (confirm('Supprimer toutes les tâches ?')) {
                tasks = [];
                saveTasks();
                renderTasks();
                }   }
});

    renderTasks();
});
