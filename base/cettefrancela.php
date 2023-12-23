<?php
if (!defined("_ECRIRE_INC_VERSION")) return;

function cettefrancela_declarer_champs_extras($champs = array()) {

	$champs['spip_articles']['disponibilite'] = array(
			'saisie' => 'selection',
			'options' => array(
				'nom' => 'disponibilite',
				'label' => _T('cettefrancela:disponibilite_label_prive'),
				'sql' => 'tinyint(1) DEFAULT 0 NOT NULL',
				'datas' => array(
					1 => _T('cettefrancela:disponibilite_oui'),
					2 => _T('cettefrancela:disponibilite_non'),
				),
			),
		);

	$champs['spip_articles']['presentation'] = array(
			'saisie' => 'textarea',
			'options' => array(
				'nom' => 'presentation',
				'label' => _T('cettefrancela:presentation_label_prive'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_RACCOURCIS',
			),
		);

	$champs['spip_articles']['presentation_marge'] = array(
			'saisie' => 'textarea',
			'options' => array(
				'nom' => 'presentation_marge',
				'label' => _T('cettefrancela:presentation_marge_label_prive'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_RACCOURCIS',
			),
		);

	$champs['spip_rubriques']['surtitre'] = array(
			'saisie' => 'input',
			'options' => array(
				'nom' => 'surtitre',
				'label' => _T('cettefrancela:rubrique_surtitre_label_prive'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_TYPO',
			),
		);

	$champs['spip_rubriques']['soustitre'] = array(
			'saisie' => 'input',
			'options' => array(
				'nom' => 'soustitre',
				'label' => _T('cettefrancela:rubrique_soustitre_label_prive'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_TYPO',
			),
		);

	$champs['spip_rubriques']['dispo'] = array(
			'saisie' => 'selection',
			'options' => array(
				'nom' => 'dispo',
				'label' => _T('cettefrancela:rubrique_disponibilite_label_prive'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'datas' => array(
					1 => _T('cettefrancela:disponibilite_oui'),
					2 => _T('cettefrancela:disponibilite_non'),
				),
			),
		);

	$champs['spip_rubriques']['pres'] = array(
			'saisie' => 'textarea',
			'options' => array(
				'nom' => 'pres',
				'label' => _T('cettefrancela:rubrique_presentation_accueil'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_RACCOURCIS',
			),
		);

	$champs['spip_rubriques']['pres_marge'] = array(
			'saisie' => 'textarea',
			'options' => array(
				'nom' => 'pres_marge',
				'label' => _T('cettefrancela:rubrique_presentation_marge'),
				'sql' => 'text NOT NULL DEFAULT \'\'',
				'traitements' => '_TRAITEMENT_RACCOURCIS',
			),
		);

	return $champs;
}
