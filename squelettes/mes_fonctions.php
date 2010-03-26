<?php
// restrictions d'affichage des champs extra relatifs aux volumes
// voir http://www.spip-contrib.net/Champs-Extras-2
include_spip('inc/cextras_autoriser');
// restreindre les champs 'isbn, prix, disponiblite, presentation' des articles, sur les rubriques 194, 230 (volumes 1 et 2)
restreindre_extras('article', array('isbn','disponibilite','presentation','prix'), array(194,230));

?>