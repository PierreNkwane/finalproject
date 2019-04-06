
$(document).ready(function(){
  // Fonction clic sur un élément a href
  $("a").on('click', function(event) {

    // Propriété par défaut
    if (this.hash !== "") {

      event.preventDefault();

      //
      var hash = this.hash;

      // Définition de l'animation et de sa vitesse
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 6000, function(){

        window.location.hash = hash;
      });
    }
  });
});
