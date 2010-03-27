$(document).ready(function(){
	Shadowbox.init();
    // =================================================
    // faire apparaitre la grille de base (jquery)
    // =================================================
    
    $("body").append("<button id='toggle'>grille</button>");
    $("#toggle").click(function () {
	      $("body").toggleClass("grille");
	});
	
	// =================================================
    // icone agrandissement image
    // =================================================
	
	// ajout de la fonction onAjaxLoad utilisée par Spip : 
	// il semble qu'avec la découpe des articles + chargement en ajax de la nouvelle page, 
	// jquery ne prend plus rien en compte. En plus réinitialisation de shadowbox avec désactivation
	// de la configuration automatique
	
	onAjaxLoad(function(){
		$("a.sbImage").hover(
			function() {
				$(this).append($("<span class='agrandir'><img src='squelettes/images/agrandir_icone.png' alt='agrandir' title='agrandir l&#x27;image' /></span>"));
			},
			function() {
				$(this).find("span.agrandir:last").remove();
			}
		);
		Shadowbox.init({
			skipSetup: true // skip the automatic setup
		});
		jQuery(function(){
		    // set up all anchor elements with a "sbImage" class to work with Shadowbox
		    Shadowbox.setup(jQuery("a.sbImage"));
		});
	});

	$("a.sbImage").hover(
		function() {
			$(this).append($("<span class='agrandir'><img src='squelettes/images/agrandir_icone.png' alt='agrandir' title='agrandir l&#x27;image' /></span>"));
		},
		function() {
			$(this).find("span.agrandir:last").remove();
		}
	);
	
	// =================================================
    // accordeon page d'accueil
    // =================================================
	$("#accordion").accordion({ header: "h3", autoHeight: false });
	
	
	$("#controller").jFlow({
		slides: "#slides",
		controller: ".jFlowControl", // must be class, use . sign
		slideWrapper : "#jFlowSlide", // must be id, use # sign
		selectedWrapper: "jFlowSelected",  // just pure text, no sign
		auto: false,		//auto change slide, default true
		width: "940px",
		height: "385px",
		duration: 400,
		prev: ".jFlowPrev", // must be class, use . sign
		next: ".jFlowNext" // must be class, use . sign
	});
	
	
	
	
});

	// =================================================
    // paramétrage de Shadowbox
    // =================================================
	Shadowbox.loadSkin('classic', 'squelettes/js/shadowbox-2.0/skin');