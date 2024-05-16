document.addEventListener("DOMContentLoaded", function() {
    const conversationButtonsContainer = document.getElementById('conversation-buttons');
    const conversationContentContainer = document.getElementById('conversation-content');

    // Charger la liste des conversations depuis le fichier conversations.txt
    fetch('conversations.txt')
    .then(response => response.text())
    .then(text => {
        const conversations = text.split('\n');

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
        });
    })
    .catch(error => console.error('Une erreur est survenue lors du chargement des conversations:', error));

    // Fonction pour charger le contenu de la conversation
    function loadConversationContent(conversation) {
        // Vous devez implémenter cette fonction en fonction de la manière dont vous stockez vos conversations
        // Par exemple, vous pouvez charger le contenu depuis un fichier ou une API
        // Une fois le contenu chargé, vous pouvez l'afficher dans #conversation-content
        conversationContentContainer.innerText = `Contenu de la conversation "${conversation}"`;
    }
});
