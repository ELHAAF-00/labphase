function ajouterAuPanier(nomProduit) {
    alert(nomProduit + " a été ajouté au panier !");
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    // Vous pouvez ajouter ici une logique pour envoyer le formulaire par AJAX
});