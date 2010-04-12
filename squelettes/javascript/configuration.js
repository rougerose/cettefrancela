$(document).ready(function(){
    // =================================================
    // pour le formulaire de recherche
    // =================================================
    var motRecherche = $("#formulaireRecherche label").text();
    $("#formulaireRecherche #recherche").attr("value", motRecherche);
    $("#formulaireRecherche label").hide();
    $("#formulaireRecherche #recherche").focus(function () {
        $(this).attr("value","");
    });
});