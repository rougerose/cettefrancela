$(document).ready(function(){
	Shadowbox.init();
    // =================================================
    // faire apparaitre la grille de base (jquery)
    // =================================================
    /*
    $("body").append("<button id='toggle'>grille</button>");
    $("#toggle").click(function () {
	      $("body").toggleClass("grille");
	});
	*/
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
	
	
    var $slide = $('#slider .slide');
    var $conteneur = $('#slider #slidesConteneur');
    // calculate a new width for the container (so it holds all panels)
    // extrait de http://www.markboultondesign.com/projects/de-standaard
    // probablement repris de jqueryfordesigners.com (à vérifier et reprendre le script en fonction de ç)
    $conteneur.css('width', 950 * $slide.length);

    $("div.boutonSlider").mouseover(function(){
        $(this).addClass("over");
    }).mouseout(function(){
        $(this).removeClass("over");
    });

	
	$('#screen').serialScroll({
	    target:'#sections',
        		items:'li', // Selector to the items ( relative to the matched elements, '#sections' in this case )
        		prev:'img.prev',// Selector to the 'prev' button (absolute!, meaning it's relative to the document)
        		next:'img.next',// Selector to the 'next' button (absolute too)
        		axis:'xy',// The default is 'y' scroll on both ways
        		navigation:'#navigation li a',
        		duration:700,// Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
        		force:true, // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
	});
	
	$("#slider").fadeIn("slow").serialScroll({
	    target: '#slides',
	    items: '.slide',
	    prev: '.precedent',
	    next: '.suivant',
	    axis: 'xy',
	    navigation: '#navigationSlider li a',
	    duration: 700,
	    force: true
	});
    
	
	
	
	
});

	// =================================================
    // paramétrage de Shadowbox
    // =================================================
	Shadowbox.loadSkin('classic', 'squelettes/js/shadowbox-2.0/skin');