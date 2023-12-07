// Importer le module fs pour la gestion des fichiers
var fs = require('fs');
// Charger le contenu du fichier JSON externe
var questionnaireJSON = JSON.parse(fs.readFileSync('../Questionnaire.json', 'utf8'));
// Définir une fonction pour récupérer la première question
function getFirstQuestion(jsonData) {
    if (jsonData && jsonData.Questionnaire && jsonData.Questionnaire.length > 0) {
        return jsonData.Questionnaire[0].question;
    }
    else {
        return undefined;
    }
}
// Utiliser la fonction pour obtenir la première question
var firstQuestion = getFirstQuestion(questionnaireJSON);
document.getElementById("counter").innerText = firstQuestion;
// Afficher la première question
if (firstQuestion !== undefined) {
    console.log("Première question :", firstQuestion);
}
else {
    console.log("Aucune question trouvée.");
}
