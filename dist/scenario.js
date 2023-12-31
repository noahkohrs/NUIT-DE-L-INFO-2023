var Scenario = /** @class */ (function () {
    function Scenario() {
        this.evo_environnement = 2;
        this.evo_argent = 4;
        this.evo_ressources = -13;
        this.evo_sante = -1;
        this.evo_frustration = -1;
        this.evo_habitants = 2;
        this.etat_environnement = 0.5;
        this.etat_argent = 50;
        this.etat_ressources = 100;
        this.etat_sante = 80;
        this.etat_bonheur = 50;
        this.etat_habitants = 100000;
    }
    Scenario.prototype.updateScenario = function (question, reponse) {
        if (reponse) {
            this.evo_environnement += question.oui.environnement;
            this.evo_argent += question.oui.argent;
            this.evo_ressources += question.oui.ressources;
            this.evo_sante += question.oui.sante;
            this.evo_frustration += question.oui.frustration;
            this.evo_habitants += question.oui.habitants;
        }
        else {
            this.evo_environnement += question.non.environnement;
            this.evo_argent += question.non.argent;
            this.evo_ressources += question.non.ressources;
            this.evo_sante += question.non.sante;
            this.evo_frustration += question.non.frustration;
            this.evo_habitants += question.non.habitants;
        }
        var nbhabbeg = this.etat_habitants;
        var a = 200;
        this.etat_habitants =
            this.etat_habitants *
                ((a + this.evo_habitants) / a) *
                ((50 + this.etat_argent / 100) / 50);
        this.etat_argent =
            this.etat_argent * (this.etat_habitants / nbhabbeg) * ((a + this.evo_argent) / a);
        this.etat_environnement =
            this.etat_environnement *
                ((320 - this.evo_environnement) / 300) * (this.etat_habitants / nbhabbeg);
        this.etat_bonheur =
            this.etat_bonheur * ((100 - this.evo_frustration) / 100) * ((500 + this.etat_sante / 100) / 500);
        this.etat_ressources =
            this.etat_ressources - ((this.etat_habitants / nbhabbeg) * (50 - this.evo_ressources) / 50);
        this.etat_sante =
            this.etat_sante * ((10 + this.evo_sante) / 10) * ((6 + this.etat_environnement / 100) / 6);
    };
    return Scenario;
}());
export { Scenario };
