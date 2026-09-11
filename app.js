
const I18N={
fr:{
heroEyebrow:"Réception satellite DX — Afrique & Océan Indien",
heroLead:"Base de réception satellite Ku et C-band couvrant l’Afrique, Madagascar et l’océan Indien, avec La Réunion comme station de référence.",
navNews:"Actualités",navTests:"Réceptions DX",navSats:"Satellites",navBeams:"Faisceaux",navFta:"Chaînes FTA",navGear:"Matériel",navContrib:"Contribuer",
statTests:"rapports de réception",statSats:"satellites suivis",statPlaces:"zones de réception",statFta:"services FTA recensés",
newsEyebrow:"Veille orbitale & services",newsTitle:"Actualités & mouvements satellites",
testsEyebrow:"Rapports terrain",testsTitle:"Réceptions DX",satsEyebrow:"Positions orbitales suivies",satsTitle:"Satellites",
beamsEyebrow:"Couvertures",beamsTitle:"Faisceaux suivis",ftaEyebrow:"Télévision en clair",ftaTitle:"Chaînes FTA observées",
gearEyebrow:"Station de référence",gearTitle:"Matériel utilisé à La Réunion",receivers:"Récepteurs",dishes:"Paraboles",
dishText:"Offset 85 cm, 1,20–1,30 m, avec essais de plus grand diamètre envisagés pour le C-band.",
lnbText:"Premium X, Inverto 60 dB <0,2 dB, Bullseye 10 kHz et projet LNBF C-band.",
contribEyebrow:"Communauté",contribTitle:"Contribuer à la base",
contribText:"Les rapports provenant de Madagascar, Maurice, Mayotte, Seychelles, Afrique australe, Afrique de l’Est et autres zones couvertes sont les bienvenus. Pour chaque réception : lieu, satellite, fréquence, polarisation, SR, bande, faisceau supposé, diamètre de parabole, LNB, SNR/qualité, météo et résultat.",
footer:"DXSat 974 — Base indépendante de réception satellite pour l’Afrique et l’océan Indien.",
thDate:"Date",thSat:"Satellite",thPos:"Pos.",thBeam:"Faisceau",thPlace:"Lieu",thBand:"Bande",thFreq:"Fréquence",thService:"Chaîne / service",thDish:"Parabole",thMeasure:"Mesure",thStatus:"Statut"
},
en:{
heroEyebrow:"Satellite DX reception — Africa & Indian Ocean",
heroLead:"Ku-band and C-band satellite reception database covering Africa, Madagascar and the Indian Ocean, with Reunion Island as the reference station.",
navNews:"News",navTests:"DX reports",navSats:"Satellites",navBeams:"Beams",navFta:"FTA channels",navGear:"Equipment",navContrib:"Contribute",
statTests:"reception reports",statSats:"satellites tracked",statPlaces:"reception areas",statFta:"FTA services listed",
newsEyebrow:"Orbital & service watch",newsTitle:"Satellite news & movements",
testsEyebrow:"Field reports",testsTitle:"DX reception reports",satsEyebrow:"Tracked orbital positions",satsTitle:"Satellites",
beamsEyebrow:"Coverage",beamsTitle:"Tracked beams",ftaEyebrow:"Free-to-air television",ftaTitle:"Observed FTA channels",
gearEyebrow:"Reference station",gearTitle:"Equipment used in Reunion Island",receivers:"Receivers",dishes:"Dishes",
dishText:"85 cm offset dish, 1.20–1.30 m dishes, with larger diameters planned for C-band tests.",
lnbText:"Premium X, Inverto 60 dB <0.2 dB, Bullseye 10 kHz and planned C-band LNBF.",
contribEyebrow:"Community",contribTitle:"Contribute to the database",
contribText:"Reception reports from Madagascar, Mauritius, Mayotte, Seychelles, Southern Africa, East Africa and other covered areas are welcome. For each report: location, satellite, frequency, polarization, SR, band, assumed beam, dish size, LNB, SNR/quality, weather and result.",
footer:"DXSat 974 — Independent satellite reception database for Africa and the Indian Ocean.",
thDate:"Date",thSat:"Satellite",thPos:"Pos.",thBeam:"Beam",thPlace:"Location",thBand:"Band",thFreq:"Frequency",thService:"Channel / service",thDish:"Dish",thMeasure:"Measurement",thStatus:"Status"
}
};

function statusClass(s){
 return {"Stable":"stable","Limite":"limite","Détecté":"detecte","Non reçu":"nonrecu","À tester":"atester"}[s]||"";
}
function renderTests(){
 const term=document.getElementById("search").value.toLowerCase();
 const band=document.getElementById("bandFilter").value;
 const status=document.getElementById("resultFilter").value;
 const rows=TESTS.filter(t=>{
   const hay=Object.values(t).join(" ").toLowerCase();
   return (!term||hay.includes(term))&&(!band||t.band===band)&&(!status||t.status===status);
 });
 document.getElementById("testsBody").innerHTML=rows.map(t=>`<tr>
 <td>${t.date}</td><td>${t.sat}</td><td>${t.pos}</td><td>${t.beam}</td><td>${t.place}</td><td>${t.band}</td>
 <td>${t.freq}</td><td>${t.sr}</td><td>${t.service}</td><td>${t.dish}</td><td>${t.measure}</td>
 <td><span class="status ${statusClass(t.status)}">${t.status}</span></td></tr>`).join("");
}
function renderCards(){
 document.getElementById("satCards").innerHTML=SATELLITES.map(s=>`<article class="sat-card"><div class="pos">${s.pos}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="tags">${s.bands.map(x=>`<span class="tag">${x}</span>`).join("")}${s.zones.map(x=>`<span class="tag">${x}</span>`).join("")}</div></article>`).join("");
 document.getElementById("beamCards").innerHTML=BEAMS.map(b=>`<article class="beam-card"><h3>${b.name}</h3><p><strong>${b.sat}</strong></p><p>${b.zone}</p><p>${b.note}</p></article>`).join("");
 document.getElementById("ftaCards").innerHTML=FTA.map(f=>`<article class="fta-card"><h3>${f.name}</h3><p>${f.sat}</p><p><strong>${f.freq}</strong></p><p>${f.place} — <span class="status ${statusClass(f.status)}">${f.status}</span></p></article>`).join("");
 document.getElementById("newsCards").innerHTML=NEWS.map(n=>`<article class="news-card"><div class="news-date">${n.date}</div><div class="news-type">${n.type}</div><h3>${n.title}</h3><p>${n.text}</p></article>`).join("");
}
function applyLang(lang){
 document.documentElement.lang=lang;
 localStorage.setItem("dxsat974_lang",lang);
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   const k=el.dataset.i18n;
   if(I18N[lang][k]) el.innerHTML=I18N[lang][k];
 });
 document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
 document.getElementById("search").placeholder=lang==="fr"?"Satellite, chaîne, lieu…":"Satellite, channel, location…";
}
document.addEventListener("DOMContentLoaded",()=>{
 renderCards(); renderTests();
 document.getElementById("statTests").textContent=TESTS.length;
 document.getElementById("statSats").textContent=SATELLITES.length;
 document.getElementById("statPlaces").textContent=new Set(TESTS.map(t=>t.place)).size;
 document.getElementById("statFta").textContent=FTA.length;
 ["search","bandFilter","resultFilter"].forEach(id=>document.getElementById(id).addEventListener("input",renderTests));
 document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
 applyLang(localStorage.getItem("dxsat974_lang")||"fr");
});
