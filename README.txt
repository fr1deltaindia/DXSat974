DXSat 974 — Version 4

Orientation :
- Afrique & océan Indien
- Ku-band et C-band
- La Réunion reste la station de référence
- Structure prête pour les rapports de Madagascar, Maurice, Mayotte, Seychelles, Afrique australe et Afrique de l'Est

Nouveautés :
- champ "Lieu" dans les rapports DX
- champ "Faisceau"
- rubrique "Faisceaux"
- rubrique "Chaînes FTA"
- actualités satellites
- bilingue FR / EN
- structure adaptée aux futures contributions communautaires

Mise à jour GitHub :
remplacez les anciens fichiers index.html, styles.css, data.js et app.js par ceux de cette version.

Version 5 :
- ajout d'une rubrique VHF DX 144 MHz
- journal des liaisons avec départ, arrivée, fréquence, mode, type de propagation, antenne, puissance et report
- intégration des essais Bois d'Olives ↔ Quartier Français
- structure ouverte aux rapports VHF de l'océan Indien et de l'Afrique

Version 6 :
- fiches complètes pour chaque satellite suivi
- bandes, faisceaux, zones couvertes et intérêt DX
- bouton vers la carte de couverture officielle de l'opérateur
- bouton brochure/PDF officiel quand disponible
- Eutelsat 36°E mis à jour en 36C / 36D

Version 7 :
- bandeau d'alerte orbitale en haut du site
- information datée sur le transfert des services 7B -> 7C
- information sur la migration 16A -> 16D annoncée pour le 15/09/2026
- lien direct vers la source technique Eurovision Services
- champ "dernière vérification"

Version 8 :
- nouvelle rubrique "Réglage rapide"
- fréquence de pointage recommandée par satellite
- bande et faisceau
- diamètre de parabole conseillé
- type de LNB et fréquence LO
- niveau de difficulté
- date de dernière vérification
- procédure de réglage en 4 étapes

Version 9 :
- intégration de Cloudflare Web Analytics
- suivi des visites et statistiques agrégées
- possibilité de consulter les pays d'origine dans le tableau de bord Cloudflare

Version 10 :
- nouvelle rubrique Contribuer par e-mail
- modèle standardisé à copier
- bouton mailto prérempli
- workflow de validation avant publication
- variable CONTRIBUTION_EMAIL dans app.js à renseigner avec l'adresse de réception

Adresse de contribution configurée : fr1deltaindia@gmail.com

Version 11 :
- accueil réorganisé autour de 3 actions principales
- hiérarchie visuelle renforcée
- légende claire des statuts : Testé / Officiel / À surveiller / À tester
- accès direct vers réglage rapide, essais DX et actualités satellites

Version 12 :
- nouvelle signature officielle sous le titre DXSat 974
- titre SEO mis à jour
- description SEO mise à jour
- version anglaise intégrée

Version 13 — SEO / visibilité :
- pages HTML séparées pour chaque satellite principal
- sitemap.xml
- robots.txt
- balises canonical
- meta descriptions dédiées
- Open Graph sur la page d'accueil
- page Dernières mises à jour
- liens internes entre accueil et fiches satellites

Version 14 :
- rubrique Matériel & stations
- fiche GTMEDIA V8 Finder 2
- lien fiche officielle GTMEDIA
- lien Download Center / notice
- lien de recherche AliExpress
- champs contributeur pour référence du mesureur et photos de station

Version 15 :
- rubrique Diffuseurs / Broadcasters
- liste initiale des chaînes réellement reçues à contacter
- contacts publics vérifiés pour QTV Gambia, SenTV/DMedia, Canal 2 International et 3Ktv
- bouton email direct par chaîne
- appel aux diffuseurs pour fournir paramètres officiels, cartes et changements de fréquence

Version 15 corrigée :
- suppression des adresses e-mail publiques des chaînes
- suppression des boutons "Écrire à..."
- conservation des liens vers les sites officiels
- rubrique Diffuseurs recentrée sur la présentation de DXSat 974
- seul le contact fr1deltaindia@gmail.com reste affiché publiquement

Version 16 :
- ajout d'une rubrique Contributeurs & remerciements
- station de référence FR1DI
- mise en avant des tests terrain et du matériel utilisé
- emplacement pour les futurs contributeurs
- publication des noms/indicatifs uniquement avec accord

Version 17 :
- remplacement de la logique "fiche contributeur" par "Tests réussis & remerciements"
- chaque essai confirmé peut créditer le testeur
- publication du lieu d'essai, satellite, fréquence/chaîne, matériel, résultat et date
- remerciement associé à chaque confirmation de réception

Version 18 :
- intégration de la carte des essais de réception à La Réunion
- ajout d’une section dédiée "Carte Réunion" sur la page d’accueil
- image disponible en grand format dans le site
- base pour une future carte interactive

Version 19 :
- vraie carte interactive OpenStreetMap/Leaflet de La Réunion
- points cliquables par lieu d’essai
- filtres par satellite et résultat
- panneau détaillé : fréquence, service, parabole, matériel, mesure et date
- position de Bois d’Olives publiée de manière approximative
- structure REUNION_MAP_POINTS prête pour ajouter de futurs contributeurs

Version 20 :
- carte interactive autonome sans Leaflet ni tuiles externes
- fond de carte local intégré au site
- points cliquables avec filtres satellite/statut
- fiche détaillée par lieu d’essai
- fonctionnement plus fiable sur GitHub Pages et en ouverture locale

Version 21 :
- carte régionale interactive Afrique & océan Indien
- points La Réunion, Maurice, Madagascar, Mayotte, Seychelles
- filtres satellite et statut
- détails de réception au clic
- La Réunion conservée en zoom local
- carte autonome sans dépendance externe

Version 22 :
- mise à jour terrain Intelsat 20 à 68,5°E du 12/09/2026
- relevés Octagon SF8008 Supreme vers 06h30 locale Réunion
- ajout des SNR/AGC et statuts image/audio sur 12522 H/V, 12562 H, 12634 V, 12657 V, 12682 H/V
- ajout des fréquences non verrouillées : 12639 H, 12722 V, 12616 H, 12647 V, 12606 H
- nouvelle fréquence de pointage pratique Intelsat 20 : 12522 V 27500 (10,5 dB SNR mesuré)

Version 23 :
- mise à jour terrain Eutelsat 16°E du 14/09/2026
- parabole offset 1,00 m + Octagon SF8008 Supreme
- 5 transpondeurs verrouillés : 10846 H, 10887 H, 11513 H, 11554 H, 11637 H / SR 30000
- mesures SNR/AGC intégrées
- 194 services détectés lors du blind scan incluant les services cryptés
- services observés : Canal+ HD, Voir+, Franceinfo et France 24
- nouvelle fréquence de pointage pratique 16°E : 10887 H 30000 (74 % SNR / 73 % AGC mesurés)

Version 24 :
- mise à jour terrain Eutelsat 16°E du 15/09/2026
- parabole offset 1,30 m + Octagon SF8008 Supreme
- 13 porteuses relevées : 10804 H, 10845 H, 10887 H, 10929 H, 11024 H, 11357 H, 11513 H, 11554 H, 11637 H, 12563 H, 12604 H, 12687 H, 12729 H
- nouveau transpondeur 10804 H / 29950 : SNR 44 % / AGC 93 %
- ajout de la liste des services détectés sur 10804 H, dont CRTV, SenTV, France 24 FR, Canal 2 International HD, Impact TV, RFI Afrique, Africa TV3, Malikia TV, Vox Africa et Equinoxe TV

Version 25 :
- comparaison terrain Eutelsat 16°E du 17/09/2026
- parabole offset 1,00 m : 12 transpondeurs reçus
- parabole offset 1,30 m : 13 transpondeurs reçus
- 11024 H / 5555 DVB-S QPSK reçu avec la 1,30 m et non observé sur le scan 1 m
- paramètres FEC / modulation du blind scan 1,30 m ajoutés à la fiche Eutelsat 16°E
- correction des anciennes valeurs approximatives par les valeurs photographiées du blind scan
