function lecture() {
    // Lit la vidéo
    lecteur.play();
}
var lecteur;

function creerBoutons() {
    // Crée les boutons de gestion du lecteur
    var btnLecture = document.createElement("button");

    var controlesBox = document.getElementById("controles");
    lecteur = document.getElementById("bgvid");

    // Ajoute un peu de texte
    btnLecture.textContent = "▶";

    // Ajoute les boutons à l'interface
    controlesBox.appendChild(btnLecture);

    // Lie les fonctions aux boutons
    btnLecture.addEventListener("click", lecture, false);

    // Affiche les nouveaux boutons et supprime l'interface originale
    controlesBox.removeAttribute("hidden");
    lecteur.removeAttribute("controls");
}

// Crée les boutons lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', creerBoutons, false);
