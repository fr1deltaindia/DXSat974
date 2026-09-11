const TESTS = [
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"10803 H",sr:"30000",service:"Canal 2 International / Africa TV3",dish:"1,20 m",measure:"S93 / Q69",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12520 H",sr:"30000",service:"AC TV, EP TV, Elohim TV…",dish:"1,20 m",measure:"S91 / Q52",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12687 H",sr:"29997",service:"QTV Gambia",dish:"1,20 m",measure:"S92 / Q66",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12728 H",sr:"30000",service:"Sen TV, VTV, LM TV…",dish:"1,20 m",measure:"S91 / Q52",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"10887 H",sr:"30000",service:"JW Broadcasting",dish:"1,20 m",measure:"S95 / Q63",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"11356 H",sr:"34995",service:"Bouquet Zimbabwe",dish:"1,20 m",measure:"S95 / Q63",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"South-East Africa",place:"La Réunion",band:"Ku",freq:"11595 H",sr:"30000",service:"Test faisceau",dish:"1,20 m",measure:"S60 / Q0",status:"Non reçu"},
 {date:"2026-08-13",sat:"Eutelsat 36E",pos:"36°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12418 H",sr:"27499",service:"DISH / ODS VOD",dish:"85 cm",measure:"S92 / Q72",status:"Stable"},
 {date:"2026-08-13",sat:"SES-5",pos:"5°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"11904 H",sr:"27500",service:"BTM TV",dish:"1,20 m",measure:"S80 / Q80",status:"Stable"},
 {date:"2026-08-13",sat:"Intelsat 20",pos:"68,5°E",beam:"Africa / Indian Ocean",place:"La Réunion",band:"Ku",freq:"12647 V",sr:"4166",service:"BTV DSN",dish:"80 cm",measure:"Image OK",status:"Stable"},
 {date:"2026-09-11",sat:"Eutelsat 3B",pos:"3°E",beam:"C-band Global",place:"La Réunion",band:"C",freq:"À tester",sr:"-",service:"Faisceau global",dish:"1,00 m",measure:"Projet",status:"À tester"}
];

const SATELLITES = [
 {name:"Eutelsat 16A",pos:"16°E",zones:["Afrique","Madagascar","Océan Indien"],bands:["Ku"],desc:"Position majeure pour les services africains et de l’océan Indien."},
 {name:"Eutelsat 7B / 7C",pos:"7°E",zones:["Afrique de l’Est","Afrique australe","Océan Indien"],bands:["Ku"],desc:"Faisceaux Africa et South-East Africa, intéressants pour le DX régional."},
 {name:"Eutelsat 3B",pos:"3°E",zones:["Afrique","Océan Indien","Global"],bands:["C","Ku"],desc:"Satellite tri-bande ; le faisceau C-band Global est une cible importante pour le projet."},
 {name:"SES-5",pos:"5°E",zones:["Afrique"],bands:["Ku"],desc:"Bonne cible pour les chaînes et services africains."},
 {name:"Eutelsat 36E",pos:"36°E",zones:["Afrique"],bands:["Ku"],desc:"Nombreuses porteuses africaines déjà reçues depuis La Réunion."},
 {name:"Intelsat 20",pos:"68,5°E",zones:["Afrique","Océan Indien"],bands:["Ku"],desc:"Position très intéressante pour les bouquets et feeds africains."}
];

const BEAMS = [
 {name:"Africa",sat:"Eutelsat 16A / 7B / 7C",zone:"Afrique subsaharienne et extension vers l’océan Indien",note:"Comparer la réception réelle selon la position géographique."},
 {name:"South-East Africa",sat:"Eutelsat 7B / 7C",zone:"Afrique orientale et australe, Madagascar et zones voisines",note:"La Réunion peut être en zone limite selon le satellite et le transpondeur."},
 {name:"C-band Global",sat:"Eutelsat 3B",zone:"Très large couverture Afrique + océan Indien",note:"Particulièrement intéressant pour les essais C-band."},
 {name:"Africa / Indian Ocean",sat:"Intelsat 20",zone:"Afrique et océan Indien",note:"Nombreuses porteuses Ku exploitables depuis plusieurs zones régionales."},
 {name:"Africa",sat:"SES-5",zone:"Afrique",note:"Bonne cible de référence pour comparer les performances d’antennes."},
 {name:"Africa",sat:"Eutelsat 36E",zone:"Afrique",note:"Nombreux services TV et données."}
];

const FTA = [
 {name:"QTV Gambia",sat:"Eutelsat 16A",freq:"12687 H 29997",place:"La Réunion",status:"Stable"},
 {name:"Sen TV / VTV / LM TV",sat:"Eutelsat 16A",freq:"12728 H 30000",place:"La Réunion",status:"Stable"},
 {name:"BTM TV",sat:"SES-5",freq:"11904 H 27500",place:"La Réunion",status:"Stable"},
 {name:"JW Broadcasting",sat:"Eutelsat 7B/7C",freq:"10887 H 30000",place:"La Réunion",status:"Stable"},
 {name:"BTV DSN",sat:"Intelsat 20",freq:"12647 V 4166",place:"La Réunion",status:"Stable"}
];

const NEWS = [
 {date:"2026-09-11",type:"Veille",title:"Position 16°E sous surveillance",text:"Suivi des éventuels changements de services, fréquences et mouvements orbitaux autour d’Eutelsat 16A / 7B."},
 {date:"2026-09-11",type:"Projet C-band",title:"Eutelsat 3B ajouté aux essais",text:"Préparation d’essais du faisceau C-band Global avec LNBF C-band et parabole adaptée."},
 {date:"2026-09-11",type:"Élargissement",title:"DXSat 974 devient Afrique & Océan Indien",text:"La base est désormais conçue pour accueillir des rapports provenant de toute la zone couverte par les faisceaux suivis."}
];
