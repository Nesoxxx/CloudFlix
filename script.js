document.addEventListener("DOMContentLoaded", function() {

    // Fonction pour gérer l'ouverture des vidéos
    function openVideoPage(videoPage) {
        window.location.href = videoPage;
    }

    // Ajoute un événement de clic sur chaque bouton "Regarder"
    const watchButtons = document.querySelectorAll(".video-card button");
    watchButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const videoPage = button.getAttribute("onclick").match(/'(.*)'/)[1]; // Récupère le lien de la vidéo
            openVideoPage(videoPage);
        });
    });

    // Exemple d'animation ou d'interaction à l'entrée sur la page
    const videoCards = document.querySelectorAll(".video-card");

    // Ajoute un effet visuel au survol des vidéos
    videoCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)";
        });
    });

    // Autres fonctionnalités ou interactions peuvent être ajoutées ici, comme des pop-ups, des animations, etc.

});
