document.addEventListener("DOMContentLoaded", function() {
    const conversationButtonsContainer = document.getElementById('conversation-buttons');
    const conversationContentContainer = document.getElementById('conversation-content');
    const conversations = [
        "Sabine Schelz",
        "Marc",
        "Coloc de CS",
        // Ajoutez d'autres conversations ici
    ];
    // Créer un bouton pour chaque conversation
    conversations.forEach(conversation => {
        const button = document.createElement('button');
        button.innerText = conversation;
        button.classList.add('button');
        button.addEventListener('click', function() {
            // Charger le contenu de la conversation lorsque le bouton est cliqué
            loadConversationContent(conversation);
        });
        conversationButtonsContainer.appendChild(button);
            
    // Fonction pour charger le contenu de la conversation
    function loadConversationContent(conversation) {
        // Vous devez implémenter cette fonction en fonction de la manière dont vous stockez vos conversations
        // Par exemple, vous pouvez charger le contenu depuis un fichier ou une API
        // Une fois le contenu chargé, vous pouvez l'afficher dans #conversation-content
        conversationContentContainer.innerText = `Contenu de la conversation "${conversation}"`;
    }
});
