// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml


const btn = document.querySelector('.toggle-btn')
const menu = document.querySelector('#side-bar');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})