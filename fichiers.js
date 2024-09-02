
// #####################################
/*
Dom javascript

Faire un todolist avec Bootstrap et JavaScript avec les possibilités suivantes:

1: ajout d'une tâche : l'utilisateur peut ajouter n tâches qu'il veut
2: List des tâches :l'utilisateur doit voir la liste des tâches ajoutées
3: Actions: chaque tâche doit avoir 3 bouttons : 

    to do (background du tâche en rouge)
    doing (background du tâche en orange)
    Done (background du tache en vert)
    Par defaut la tâche doit etre en rouge (to do) s'il clique sur doing la couleur doit changer en orange , et en verte s'il clique sur done.
*/
document.addEventListener('DOMContentLoaded', () => {
    let buttonAjoute = document.getElementById('bouttonAjout');
    let modal = new bootstrap.Modal(document.getElementById('modal'));

    // Fonction pour changer le statut et la couleur de la tâche
    function changeStatus(row, status) {
        if (status === 'to-do') {
            row.style.backgroundColor = 'red';
        } else if (status === 'doing') {
            row.style.backgroundColor = 'orange';
        } else if (status === 'done') {
            row.style.backgroundColor = 'green';
        }
    }

    // Événement pour afficher le modal lorsqu'on clique sur le bouton "Ajouter"
    buttonAjoute.addEventListener('click', () => {
        modal.show();
    });

    // Événement pour ajouter une nouvelle tâche
    document.getElementById('send').addEventListener('click', () => {
        // Récupérer la valeur de l'input
        let valeur = document.getElementById('ajouPrenom').value;

        // Vérifier si le champ n'est pas vide
        if (valeur.trim() === '') {
            alert('Veuillez entrer une tâche.');
            return;
        }

        // Créer une nouvelle ligne pour la tâche
        let newRow = document.createElement('tr');
        newRow.classList.add('task-row');
        newRow.style.backgroundColor = 'red'; // Par défaut, "To Do"

        newRow.innerHTML = `
            <td>${valeur}</td>
            <td>
                <button class="btn btn-sm btn-danger status-btn">To Do</button>
                <button class="btn btn-sm btn-warning status-btn">Doing</button>
                <button class="btn btn-sm btn-success status-btn">Done</button>
            </td>
        `;

        // Ajouter les événements de changement de statut aux boutons
        let buttons = newRow.querySelectorAll('.status-btn');
        buttons[0].addEventListener('click', () => changeStatus(newRow, 'to-do'));
        buttons[1].addEventListener('click', () => changeStatus(newRow, 'doing'));
        buttons[2].addEventListener('click', () => changeStatus(newRow, 'done'));

        // Ajouter la ligne au tableau
        document.getElementById('Tbody').appendChild(newRow);

        // Fermer le modal
        modal.hide();

        // Réinitialiser le champ de saisie pour une nouvelle tâche
        document.getElementById('ajouPrenom').value = '';
    });
});
