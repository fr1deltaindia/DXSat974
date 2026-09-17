const TESTS = [
 {date:"2026-09-17",sat:"Eutelsat 16°E",pos:"16°E",beam:"Comparatif terrain",place:"La Réunion",band:"Ku",freq:"Blind scan 1,00 m",sr:"-",service:"12 transpondeurs reçus",dish:"1,00 m offset",measure:"12 TP : 10804, 10846, 10887, 10929, 11513, 11554, 11638, 12521, 12563, 12605, 12687, 12729 H",status:"Stable"},
 {date:"2026-09-17",sat:"Eutelsat 16°E",pos:"16°E",beam:"Comparatif terrain",place:"La Réunion",band:"Ku",freq:"Blind scan 1,30 m",sr:"-",service:"13 transpondeurs reçus",dish:"1,30 m offset",measure:"13 TP ; 11024 H / 5555 reçu en plus",status:"Stable"},
 {date:"2026-09-17",sat:"Eutelsat 16°E",pos:"16°E",beam:"Comparatif terrain",place:"La Réunion",band:"Ku",freq:"11024 H",sr:"5555",service:"Porteuse faible / faible SR — reçue avec 1,30 m",dish:"1,30 m offset",measure:"DVB-S QPSK / FEC Auto",status:"Détecté"},
 {date:"2026-09-15",sat:"Eutelsat 16°E",pos:"16°E",beam:"Afrique / relevé terrain",place:"La Réunion",band:"Ku",freq:"10804 H",sr:"29950",service:"Quausain, Alu, CRTV, SenTV, CRTV News, Zik FM, RTB TV/Radio, CRTV Sport HD, LM TV, Arewa24, BTV, BB24, France 24 FR, Canal 2 International HD, Impact TV, RFI Afrique, Africa TV3, Malikia TV, Vox Africa, Equinoxe TV…",dish:"1,30 m offset",measure:"SNR 44 % / AGC 93 %",status:"Limite"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"10803 H",sr:"30000",service:"Canal 2 International / Africa TV3",dish:"1,20 m",measure:"S93 / Q69",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12520 H",sr:"30000",service:"AC TV, EP TV, Elohim TV…",dish:"1,20 m",measure:"S91 / Q52",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12687 H",sr:"29997",service:"QTV Gambia",dish:"1,20 m",measure:"S92 / Q66",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 16A",pos:"16°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12728 H",sr:"30000",service:"Sen TV, VTV, LM TV…",dish:"1,20 m",measure:"S91 / Q52",status:"Stable"},
 {date:"2026-09-14",sat:"Eutelsat 16°E",pos:"16°E",beam:"Océan Indien / régional (relevé terrain)",place:"La Réunion",band:"Ku",freq:"10846 H",sr:"30000",service:"Blind scan — services détectés",dish:"1,00 m offset",measure:"SNR 70 % / AGC 73 %",status:"Stable"},
 {date:"2026-09-14",sat:"Eutelsat 16°E",pos:"16°E",beam:"Océan Indien / régional (relevé terrain)",place:"La Réunion",band:"Ku",freq:"10887 H",sr:"30000",service:"Blind scan — services détectés",dish:"1,00 m offset",measure:"SNR 74 % / AGC 73 %",status:"Stable"},
 {date:"2026-09-14",sat:"Eutelsat 16°E",pos:"16°E",beam:"Océan Indien / régional (relevé terrain)",place:"La Réunion",band:"Ku",freq:"11513 H",sr:"30000",service:"Blind scan — services détectés",dish:"1,00 m offset",measure:"SNR 70 % / AGC 65 %",status:"Stable"},
 {date:"2026-09-14",sat:"Eutelsat 16°E",pos:"16°E",beam:"Océan Indien / régional (relevé terrain)",place:"La Réunion",band:"Ku",freq:"11554 H",sr:"30000",service:"Blind scan — services détectés",dish:"1,00 m offset",measure:"SNR 70 % / AGC 65 %",status:"Stable"},
 {date:"2026-09-14",sat:"Eutelsat 16°E",pos:"16°E",beam:"Océan Indien / régional (relevé terrain)",place:"La Réunion",band:"Ku",freq:"11637 H",sr:"30000",service:"Blind scan — services détectés",dish:"1,00 m offset",measure:"SNR 70 % / AGC 62 %",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"10887 H",sr:"30000",service:"JW Broadcasting",dish:"1,20 m",measure:"S95 / Q63",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"11356 H",sr:"34995",service:"Bouquet Zimbabwe",dish:"1,20 m",measure:"S95 / Q63",status:"Stable"},
 {date:"2026-08-13",sat:"Eutelsat 7B/7C",pos:"7°E",beam:"South-East Africa",place:"La Réunion",band:"Ku",freq:"11595 H",sr:"30000",service:"Test faisceau",dish:"1,20 m",measure:"S60 / Q0",status:"Non reçu"},
 {date:"2026-08-13",sat:"Eutelsat 36E",pos:"36°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"12418 H",sr:"27499",service:"DISH / ODS VOD",dish:"85 cm",measure:"S92 / Q72",status:"Stable"},
 {date:"2026-08-13",sat:"SES-5",pos:"5°E",beam:"Africa",place:"La Réunion",band:"Ku",freq:"11904 H",sr:"27500",service:"BTM TV",dish:"1,20 m",measure:"S80 / Q80",status:"Stable"},
 {date:"2026-08-13",sat:"Intelsat 20",pos:"68,5°E",beam:"Africa / Indian Ocean",place:"La Réunion",band:"Ku",freq:"12647 V",sr:"4166",service:"BTV DSN",dish:"80 cm",measure:"Image OK",status:"Stable"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12522 H",sr:"30000",service:"Channels TV, Wap TV, TVC News, TVC Nigeria, Efatha TV, Mindset Learn, Amazing Facts TV, Hope Channel… + radios AWR Tanzania, Radio Maranatha, Malawi Adventist Radio, Rádio Novo Tempo, AWR SID Radio",dish:"Non précisée",measure:"SNR 7,2 dB / AGC 62 % — Amazing Facts image OK",status:"Stable"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12522 V",sr:"27500",service:"Markaz Sahada / Ezekiel / Spare / Emmanuel TV / Angel TV / Daystar / Christ TV NAC / Spare1",dish:"Non précisée",measure:"SNR 10,5 dB / AGC 68 % — 5 TV image OK, Markaz radio OK, Spare/Spare1 sans image",status:"Stable"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12562 H",sr:"30000",service:"Markaz Radio / Ezekiel TV / Spare / Emmanuel TV / Angel TV / Daystar / Christ TV NAC / Spare1",dish:"Non précisée",measure:"TV principales image OK ; Spare/Spare1 sans image",status:"Stable"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12634 V",sr:"16171",service:"Khadugahd TV / Radio Services / YTV Botswana / BTV2 / France 24 / BTV News / BTV1 / BTV Mobile",dish:"Non précisée",measure:"SNR 7,2 dB / AGC 51 % — Radio Services audio OK ; TV sans image à 06h30",status:"Détecté"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12657 V",sr:"4883",service:"BTV ENC A",dish:"Non précisée",measure:"SNR 8,2 dB / AGC 35 % — service détecté, pas d’image à 06h30",status:"Détecté"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12682 H",sr:"30000",service:"SMTV / Biafra Radio / GFN Soccer / ViewMedia Promo / MTA 4 Africa / MTA Africa English / MTA Africa Swahili / 2× Intelsat FUS Test",dish:"Non précisée",measure:"SNR 5,8 dB / AGC 49 % — TV image OK ; Biafra Radio sans son",status:"Stable"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12682 V",sr:"30000",service:"12682V SID 0x3E7 (SID 999) — service non identifié",dish:"Non précisée",measure:"1 service détecté",status:"Détecté"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12639 H",sr:"7780",service:"Aucun service verrouillé au relevé",dish:"Non précisée",measure:"Pas de verrouillage à 06h30",status:"Non reçu"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Europe/Africa",place:"La Réunion",band:"Ku",freq:"12722 V",sr:"30000",service:"Aucun service verrouillé au relevé",dish:"Non précisée",measure:"Pas de verrouillage à 06h30",status:"Non reçu"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Feeds occasionnels",place:"La Réunion",band:"Ku",freq:"12616 H",sr:"7200",service:"Feed occasionnel — non détecté",dish:"Non précisée",measure:"Non détecté à 06h30",status:"Non reçu"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Feeds occasionnels",place:"La Réunion",band:"Ku",freq:"12647 V",sr:"4166",service:"BTV DSN / feed occasionnel — non détecté lors du nouveau relevé",dish:"Non précisée",measure:"Non détecté à 06h30 ; réception antérieure confirmée le 13/08",status:"Non reçu"},
 {date:"2026-09-12",sat:"Intelsat 20",pos:"68,5°E",beam:"Feeds occasionnels",place:"La Réunion",band:"Ku",freq:"12606 H",sr:"7200",service:"Feed occasionnel — non détecté",dish:"Non précisée",measure:"Non détecté à 06h30",status:"Non reçu"},
 {date:"2026-09-11",sat:"Eutelsat 3B",pos:"3°E",beam:"C-band Global",place:"La Réunion",band:"C",freq:"À tester",sr:"-",service:"Faisceau global",dish:"1,00 m",measure:"Projet",status:"À tester"}
];

const SATELLITES = [
 {
   name:"Eutelsat 16A",pos:"16°E",operator:"Eutelsat",launch:"2011",
   bands:["Ku","Ka"],
   beams:["Ku Africa","Ku South-East Africa / Indian Ocean","Ku Europe A/B"],
   zones:["Afrique subsaharienne","Madagascar","La Réunion","Mayotte","Océan Indien","Europe"],
   dx:"Très important pour DXSat 974. Plusieurs transpondeurs africains et de l’océan Indien ont été reçus à La Réunion. Migration de services vers Eutelsat 16D annoncée pour le 15 septembre 2026.",
   officialMap:"https://www.eutelsat.com/satellite-network/GEO-fleet/eutelsat-16-east",
   officialPdf:"https://www.eutelsat.com/sites/default/files/satellite_imported_documents/EUTELSAT_SATELLITE_E16A.pdf"
 },
 {
   name:"Eutelsat 7C",pos:"7°E",operator:"Eutelsat",launch:"2019",
   bands:["Ku"],
   beams:["Ku West","Ku East","Steerable / Africa capacity"],
   zones:["Afrique subsaharienne","Afrique de l’Est","Moyen-Orient","Europe","Asie centrale"],
   dx:"Cible importante pour les chaînes africaines. Les résultats réels depuis l’océan Indien sont à comparer faisceau par faisceau.",
   officialMap:"https://www.eutelsat.com/satellite-network/GEO-fleet/eutelsat-7-east",
   officialPdf:"https://www.eutelsat.com/sites/default/files/satellite_imported_documents/EUTELSAT_SATELLITE_E7C_14.pdf"
 },
 {
   name:"Eutelsat 3B",pos:"3°E",operator:"Eutelsat",launch:"2014",
   bands:["C","Ku","Ka"],
   beams:["C-band Global","Ku Europe","Ku East","Ku steerable"],
   zones:["Afrique","Océan Indien","Moyen-Orient","Asie centrale","Amérique du Sud"],
   dx:"Très intéressant pour les futurs essais C-band : le faisceau C Global couvre une très grande zone incluant l’Afrique et l’océan Indien.",
   officialMap:"https://www.eutelsat.com/satellite-network/GEO-fleet/eutelsat-3-east",
   officialPdf:"https://www.eutelsat.com/system/files/2026-01/DOC_GEOFLEET_Satellite_Brochure_EUTELSAT-3B-EAST.pdf"
 },
 {
   name:"SES-5",pos:"5°E",operator:"SES",launch:"2012",
   bands:["Ku","C"],
   beams:["Africa / Europe / Middle East selon charge utile"],
   zones:["Afrique","Europe","Moyen-Orient"],
   dx:"Position déjà reçue avec de bons niveaux depuis La Réunion. Utile comme référence de comparaison pour les essais africains.",
   officialMap:"https://www.ses.com/our-coverage",
   officialPdf:""
 },
 {
   name:"Eutelsat 36C / 36D",pos:"36°E",operator:"Eutelsat",launch:"2015 / 2024",
   bands:["Ku","Ka"],
   beams:["36C Ku Sub-Saharan Africa","36D Ku African","36D Ku South African"],
   zones:["Afrique subsaharienne","Afrique australe","Europe","Russie / CEI"],
   dx:"Position très active pour l’Afrique. Plusieurs porteuses ont déjà été reçues à La Réunion avec une parabole de 85 cm.",
   officialMap:"https://www.eutelsat.com/satellite-network/GEO-fleet/eutelsat-36-east",
   officialPdf:"https://www.eutelsat.com/system/files/2026-01/DOC_GEOFLEET_Satellite_Brochure_EUTELSAT-36C-EAST.pdf"
 },
 {
   name:"Intelsat 20",pos:"68.5°E",operator:"Intelsat",launch:"2012",
   bands:["Ku","C"],
   beams:["Ku Europe/Africa","Ku South Africa","C-band regional/global resources"],
   zones:["Afrique","Afrique australe","Europe","Moyen-Orient","Océan Indien"],
   dx:"Une des positions les plus intéressantes depuis La Réunion : nombreux transpondeurs Ku et feeds déjà observés.",
   officialMap:"https://www.intelsat.com/fleetmaps/",
   officialPdf:"https://www.intelsat.com/wp-content/uploads/2025/10/SatelliteGuide.pdf"
 }
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
 {date:"2026-09-17",type:"Comparatif terrain",title:"16°E — 1 m contre 1,30 m à La Réunion",text:"Deux blind scans rapprochés avec l’Octagon SF8008 Supreme donnent 12 transpondeurs avec l’offset 1,00 m et 13 avec la 1,30 m. La différence observée est 11024 H / 5555 DVB-S QPSK, verrouillé avec la 1,30 m. Les écarts de ±1 MHz sur d’autres porteuses sont traités comme variations normales du blind scan.",source:""},
 {date:"2026-09-15",type:"Relevé terrain",title:"16°E — nouveau transpondeur reçu avec parabole 1,30 m",text:"Octagon SF8008 Supreme : 10804 H / 29950 verrouillé avec SNR 44 % / AGC 93 %. De nombreux services africains ont été détectés, dont CRTV, SenTV, France 24 FR, Canal 2 International HD, Impact TV, RFI Afrique, Africa TV3, Malikia TV, Vox Africa et Equinoxe TV. Le blind scan 1,30 m détecte désormais 13 porteuses relevées sur 16°E.",source:""},
 {date:"2026-09-14",type:"Relevé terrain",title:"16°E — blind scan avec parabole offset 1 m à La Réunion",text:"Octagon SF8008 Supreme : 5 transpondeurs verrouillés (10846 H, 10887 H, 11513 H, 11554 H, 11637 H — SR 30000). 194 services détectés en incluant les services cryptés. Services observés dans la liste : Canal+ HD, Voir+, Franceinfo et France 24. Meilleur niveau relevé : 10887 H à 74 % SNR / 73 % AGC.",source:""},
 {date:"2026-09-11",type:"Migration programmée",title:"Eutelsat 16A → Eutelsat 16D le 15 septembre",text:"Eurovision Services annonce un transfert des services vers Eutelsat 16D à 16°E le 15 septembre 2026, avec extinction des transpondeurs 16A et activation sur 16D autour de 02:10 UTC.",source:"https://www.eurovisionservices.com/insights/technical/transfer-of-services-from-eutelsat-16a-to-eutelsat-16d"},
 {date:"2026-09-01",type:"Transfert de services",title:"Eutelsat 7B quitte 7°E",text:"Les services commerciaux d’Eutelsat 7B ont été transférés vers Eutelsat 7C. Plusieurs sources spécialisées évoquent alors un repositionnement de 7B vers 16°E.",source:"https://satkurier.pl/news/252588/eutelsat-7b-schodzi-z-7e-mozliwa-relokacja-na-16e.html"},
 {date:"2026-09-11",type:"À surveiller",title:"Réception à La Réunion après migration",text:"À partir du 15 septembre, comparer les niveaux, faisceaux et paramètres des transpondeurs reçus depuis La Réunion, notamment les services africains et TV Malagasy.",source:""}
];


const VHF_TESTS = [
 {date:"2026-08-11",from:"Bois d’Olives, Saint-Pierre",to:"Quartier Français, Sainte-Suzanne",freq:"145.500 MHz",mode:"FM",prop:"Réflexion relief",antenna:"Yagi 9 él. H",power:"50 W",report:"S2 → S4 côté correspondant",notes:"Liaison obtenue via réflexion vers le Piton des Neiges. Polarisation horizontale."},
 {date:"2026-08-18",from:"Bois d’Olives, Saint-Pierre",to:"Quartier Français, Sainte-Suzanne",freq:"145.510 MHz",mode:"FM",prop:"Réflexion relief",antenna:"Yagi 9 él. H",power:"50 W",report:"Bonne radio / signal variable",notes:"La Yagi 9 éléments s’est montrée plus efficace que la 17 éléments sur ce trajet."},
 {date:"2026-08-18",from:"Bois d’Olives, Saint-Pierre",to:"Quartier Français, Sainte-Suzanne",freq:"145.510 MHz",mode:"FM",prop:"Réflexion relief",antenna:"Yagi 17 él. H",power:"50 W",report:"Moins bon que 9 él.",notes:"Essai comparatif de directivité et largeur de faisceau sur trajet réfléchi."}
];


const QUICK_POINTING = [
 {sat:"Eutelsat 16A / 16D",pos:"16°E",band:"Ku",freq:"10887 H 30000",beam:"Afrique / Océan Indien — relevé terrain",dish:"1,00 m reçue ; 1,30 m apporte plus de marge",lnb:"Ku universel — LO 9750/10600",difficulty:"Facile",checked:"17/09/2026"},
 {sat:"Eutelsat 7C",pos:"7°E",band:"Ku",freq:"11356 H 34995",beam:"Africa",dish:"1,20 m",lnb:"Ku universel — LO 9750/10600",difficulty:"Moyen",checked:"11/09/2026"},
 {sat:"SES-5",pos:"5°E",band:"Ku",freq:"11904 H 27500",beam:"Africa",dish:"85 cm à 1,20 m",lnb:"Ku universel — LO 9750/10600",difficulty:"Facile",checked:"11/09/2026"},
 {sat:"Eutelsat 36E",pos:"36°E",band:"Ku",freq:"12418 H 27499",beam:"Africa",dish:"85 cm à 1,20 m",lnb:"Ku universel — LO 9750/10600",difficulty:"Facile",checked:"11/09/2026"},
 {sat:"Intelsat 20",pos:"68,5°E",band:"Ku",freq:"12522 V 27500",beam:"Europe/Africa",dish:"80 cm à 1,20 m",lnb:"Ku universel — LO 9750/10600",difficulty:"Facile",checked:"12/09/2026"},
 {sat:"Eutelsat 3B",pos:"3°E",band:"C",freq:"À confirmer avant pointage",beam:"C-band Global",dish:"1,20 m minimum conseillé",lnb:"C-band — LO 5150",difficulty:"DX",checked:"11/09/2026"}
];


const REUNION_MAP_POINTS = [
  {
    id:"saint-pierre-bois-olives",
    name:"Bois d’Olives / Saint-Pierre",
    area:"Sud de La Réunion",
    lat:-21.300,
    lng:55.470,
    x:47.0,
    y:67.0,
    approximate:true,
    tester:"FR1DI",
    notes:"Station de référence DXSat 974 — position cartographique approximative.",
    tests:[
      {sat:"Eutelsat 16A",pos:"16°E",freq:"10803 H 30000",service:"Canal 2 International / Africa TV3",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2 / Octagon SF8008",measure:"S93 / Q69",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 16A",pos:"16°E",freq:"12520 H 30000",service:"AC TV, EP TV, Elohim TV…",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S91 / Q52",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 16A",pos:"16°E",freq:"12687 H 29997",service:"QTV Gambia",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S92 / Q66",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 16A",pos:"16°E",freq:"12728 H 30000",service:"Sen TV, VTV, LM TV…",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S91 / Q52",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 16°E",pos:"16°E",freq:"10887 H 30000",service:"Blind scan — meilleur niveau du relevé",dish:"1,00 m offset",equipment:"Octagon SF8008 Supreme",measure:"SNR 74 % / AGC 73 %",status:"Stable",date:"14/09/2026"},
      {sat:"Eutelsat 16°E",pos:"16°E",freq:"10846 H / 11513 H / 11554 H / 11637 H",service:"Blind scan — 5 TP au total / 194 services avec cryptés",dish:"1,00 m offset",equipment:"Octagon SF8008 Supreme",measure:"SNR 70 % / AGC 62–73 %",status:"Stable",date:"14/09/2026"},
      {sat:"Eutelsat 16°E",pos:"16°E",freq:"10804 H 29950",service:"Mux africain — nombreux services TV/radio détectés",dish:"1,30 m offset",equipment:"Octagon SF8008 Supreme",measure:"SNR 44 % / AGC 93 %",status:"Limite",date:"15/09/2026"},
      {sat:"Eutelsat 16°E",pos:"16°E",freq:"Blind scan 12 TP",service:"Comparatif 1 m",dish:"1,00 m offset",equipment:"Octagon SF8008 Supreme",measure:"12 transpondeurs reçus",status:"Stable",date:"17/09/2026"},
      {sat:"Eutelsat 16°E",pos:"16°E",freq:"Blind scan 13 TP — 11024 H 5555",service:"Comparatif 1,30 m",dish:"1,30 m offset",equipment:"Octagon SF8008 Supreme",measure:"13 transpondeurs reçus ; 11024 H en plus",status:"Stable",date:"17/09/2026"},
      {sat:"Eutelsat 7B/7C",pos:"7°E",freq:"10887 H 30000",service:"JW Broadcasting",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S95 / Q63",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 7B/7C",pos:"7°E",freq:"11356 H 34995",service:"Bouquet Zimbabwe",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S95 / Q63",status:"Stable",date:"13/08/2026"},
      {sat:"Eutelsat 7B/7C",pos:"7°E",freq:"11595 H 30000",service:"Test faisceau South-East Africa",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S60 / Q0",status:"Non reçu",date:"13/08/2026"},
      {sat:"Eutelsat 36E",pos:"36°E",freq:"12418 H 27499",service:"DISH / ODS VOD",dish:"85 cm",equipment:"GTMEDIA V8 Finder 2",measure:"S92 / Q72",status:"Stable",date:"13/08/2026"},
      {sat:"SES-5",pos:"5°E",freq:"11904 H 27500",service:"BTM TV",dish:"1,20 m",equipment:"GTMEDIA V8 Finder 2",measure:"S80 / Q80",status:"Stable",date:"13/08/2026"},
      {sat:"Intelsat 20",pos:"68,5°E",freq:"12647 V 4166",service:"BTV DSN",dish:"80 cm",equipment:"GTMEDIA V8 Finder 2 / Freesat V7",measure:"Image OK",status:"Stable",date:"13/08/2026"},
      {sat:"Intelsat 20",pos:"68,5°E",freq:"12522 V 27500",service:"Markaz Sahada / Ezekiel / Emmanuel TV / Angel TV / Daystar / Christ TV NAC",dish:"Non précisée",equipment:"Octagon SF8008 Supreme",measure:"SNR 10,5 dB / AGC 68 %",status:"Stable",date:"12/09/2026"},
      {sat:"Intelsat 20",pos:"68,5°E",freq:"12682 H 30000",service:"SMTV / GFN Soccer / ViewMedia Promo / MTA Africa / Intelsat FUS Test",dish:"Non précisée",equipment:"Octagon SF8008 Supreme",measure:"SNR 5,8 dB / AGC 49 %",status:"Stable",date:"12/09/2026"},
      {sat:"Eutelsat 3B",pos:"3°E",freq:"C-band Global",service:"Essai C-band prévu",dish:"1,00–1,20 m",equipment:"LNBF C-band à installer",measure:"Projet",status:"À tester",date:"11/09/2026"}
    ]
  }
];
