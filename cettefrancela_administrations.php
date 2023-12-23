<?php

if (!defined('_ECRIRE_INC_VERSION')) {
  return;
}

// Inclure l'API Champs Extras
include_spip('inc/cextras');

// Inclure les champs déclarés à l'étape précédente
include_spip('base/cettefrancela');

function cettefrancela_upgrade($nom_meta_base_version,$version_cible) {
	$maj = array();
	// Première déclaration à l'installation du plugin
	cextras_api_upgrade(cettefrancela_declarer_champs_extras(), $maj['create']);

	include_spip('base/upgrade');
	maj_plugin($nom_meta_base_version, $version_cible, $maj);
}

// Désinstaller proprement le plugin en supprimant les champs de la base de données
function cettefrancela_vider_tables($nom_meta_base_version) {
	// cextras_api_vider_tables(cettefrancela_declarer_champs_extras());
	effacer_meta($nom_meta_base_version);
}
