const TESTS=[
{date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",band:"Ku",freq:"10803 H",sr:"30000",service:"Canal 2 International / Africa TV3",dish:"1,20 m",measure:"S93/Q69",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",band:"Ku",freq:"12520 H",sr:"30000",service:"AC TV, EP TV, Elohim TV…",dish:"1,20 m",measure:"S91/Q52",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",band:"Ku",freq:"12687 H",sr:"29997",service:"QTV Gambia",dish:"1,20 m",measure:"S92/Q66",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",band:"Ku",freq:"12728 H",sr:"30000",service:"Sen TV, VTV, LM TV…",dish:"1,20 m",measure:"S91/Q52",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",band:"Ku",freq:"10887 H",sr:"30000",service:"JW Broadcasting",dish:"1,20 m",measure:"S95/Q63",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",band:"Ku",freq:"11356 H",sr:"34995",service:"Bouquet Zimbabwe",dish:"1,20 m",measure:"S95/Q63",result:"Réussi"},
{date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",band:"Ku",freq:"11595 H",sr:"30000",service:"Faisceau 7C Africa",dish:"1,20 m",measure:"S60/Q0",result:"Échec"},
{date:"2026-08-13",sat:"Eutelsat 36E",pos:"36°E",band:"Ku",freq:"12418 H",sr:"27499",service:"DISH / ODS VOD",dish:"85 cm",measure:"S92/Q72",result:"Réussi"},
{date:"2026-08-13",sat:"SES-5",pos:"5°E",band:"Ku",freq:"11904 H",sr:"27500",service:"BTM TV",dish:"1,20 m",measure:"S80/Q80",result:"Réussi"},
{date:"2026-08-13",sat:"Intelsat 20",pos:"68,5°E",band:"Ku",freq:"12647 V",sr:"4166",service:"BTV DSN",dish:"80 cm",measure:"Image OK",result:"Réussi"},
{date:"2026-09-11",sat:"Eutelsat 3B",pos:"3°E",band:"C",freq:"À tester",sr:"-",service:"Faisceau C Global",dish:"1,00 m",measure:"Projet",result:"Partiel"}
];
const SATS=[
["Eutelsat 16A","16°E","Afrique et océan Indien; suivi de TV Malagasy et des évolutions de la position 16°E."],
["Eutelsat 7B / 7C","7°E","Essais des faisceaux Africa et South-East Africa."],
["Eutelsat 36E","36°E","Plusieurs transpondeurs africains reçus avec 85 cm."],
["SES-5","5°E","Très bons niveaux observés sur plusieurs porteuses africaines."],
["Intelsat 20","68,5°E","Nombreux transpondeurs Ku déjà reçus."],
["Eutelsat 3B","3°E","Nouvelle cible en C-band Global et tests Ku."]
];

const NEWS=[
{date:"2026-09-11",sat:"Eutelsat 7B",type:"Mouvement orbital",title:"Eutelsat 7B poursuit son déplacement vers l’est",text:"KingOfSat répertorie actuellement Eutelsat 7B en mouvement vers l’est, autour de 14°E, à environ 0,66° par jour. La destination finale reste à confirmer officiellement.",source:"KingOfSat",url:"https://en.kingofsat.net/sat-e7b"},
{date:"2026-09-10",sat:"Eutelsat 16A",type:"Transpondeur",title:"Surveillance renforcée des changements à 16°E",text:"Les listes de services de la position 16°E continuent d’être mises à jour. DXSat 974 surveille en priorité les modifications susceptibles d’affecter les faisceaux Afrique / océan Indien et TV Malagasy 11024 H 3333.",source:"KingOfSat",url:"https://en.kingofsat.tv/new.php?aff=list&filtre=no&lim=20&ordre=sid&standard=All&tp=6086"},
{date:"2026-09-11",sat:"Eutelsat 3B",type:"Test",title:"Ouverture des essais C-band sur 3°E",text:"Nouvelle cible DXSat 974 : test du faisceau global bande C d’Eutelsat 3B avec LNBF C-band et comparaison avec les faisceaux Ku.",source:"DXSat 974",url:""},
{date:"2026-09-11",sat:"Eutelsat 7C",type:"Test",title:"Recherche des transpondeurs Africa réellement reçus à La Réunion",text:"Les futurs blind scans seront consignés ici afin d’identifier les nouvelles chaînes FTA et les changements de paramètres observables depuis Bois d’Olives.",source:"DXSat 974",url:""}
];
