
const I18N={
fr:{
heroEyebrow:"Réception satellite DX — Afrique & Océan Indien",
heroLead:"Base de réception satellite Ku et C-band couvrant l’Afrique, Madagascar et l’océan Indien, avec La Réunion comme station de référence.",
navNews:"Actualités",navTests:"Réceptions DX",navSats:"Satellites",navBeams:"Faisceaux",navFta:"Chaînes FTA",navVhf:"VHF DX",navGear:"Matériel",navContrib:"Contribuer",
statTests:"rapports de réception",statSats:"satellites suivis",statPlaces:"zones de réception",statFta:"services FTA recensés",
newsEyebrow:"Veille orbitale & services",newsTitle:"Actualités & mouvements satellites",
testsEyebrow:"Rapports terrain",testsTitle:"Réceptions DX",satsEyebrow:"Positions orbitales suivies",satsTitle:"Fiches satellites",satIntro:"Chaque fiche regroupe les bandes, faisceaux, zones couvertes, observations DX et un accès direct à la carte de couverture officielle de l’opérateur.",
beamsEyebrow:"Couvertures",beamsTitle:"Faisceaux suivis",ftaEyebrow:"Télévision en clair",ftaTitle:"Chaînes FTA observées",
vhfEyebrow:"Propagation radio",vhfTitle:"VHF DX — 144 MHz & océan Indien",vhfIntro:"Cette rubrique rassemble les essais VHF DX réalisés depuis La Réunion et, à terme, les rapports venant de l’océan Indien et de l’Afrique : liaisons 144 MHz, tropo, conduits maritimes, réflexions sur le relief, ouvertures exceptionnelles et comparaisons d’antennes.",vhfDate:"Date",vhfFrom:"Départ",vhfTo:"Arrivée",vhfFreq:"Fréquence",vhfMode:"Mode",vhfProp:"Propagation",vhfAnt:"Antenne",vhfPower:"Puissance",vhfReport:"Report",vhfNotes:"Observations",vhfPropTypes:"Types de propagation suivis",vhfPropTypesText:"Réflexion sur relief, propagation troposphérique, ducting maritime, trajets directs et ouvertures inhabituelles.",vhfZones:"Zones d’intérêt",vhfZonesText:"La Réunion, Maurice, Rodrigues, Madagascar, Mayotte, Mozambique, Afrique australe et Afrique de l’Est.",vhfGoal:"Objectif",vhfGoalText:"Construire une base de rapports réels permettant de comparer distance, relief, météo, antennes, polarisation et niveaux reçus.",gearEyebrow:"Station de référence",gearTitle:"Matériel utilisé à La Réunion",receivers:"Récepteurs",dishes:"Paraboles",
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
navNews:"News",navTests:"DX reports",navSats:"Satellites",navBeams:"Beams",navFta:"FTA channels",navVhf:"VHF DX",navGear:"Equipment",navContrib:"Contribute",
statTests:"reception reports",statSats:"satellites tracked",statPlaces:"reception areas",statFta:"FTA services listed",
newsEyebrow:"Orbital & service watch",newsTitle:"Satellite news & movements",
testsEyebrow:"Field reports",testsTitle:"DX reception reports",satsEyebrow:"Tracked orbital positions",satsTitle:"Satellite profiles",satIntro:"Each profile gathers bands, beams, coverage areas, DX observations and direct access to the operator’s official coverage map.",
beamsEyebrow:"Coverage",beamsTitle:"Tracked beams",ftaEyebrow:"Free-to-air television",ftaTitle:"Observed FTA channels",
vhfEyebrow:"Radio propagation",vhfTitle:"VHF DX — 144 MHz & Indian Ocean",vhfIntro:"This section gathers VHF DX tests carried out from Reunion Island and, over time, reports from the Indian Ocean and Africa: 144 MHz contacts, tropo, marine ducting, terrain reflections, exceptional openings and antenna comparisons.",vhfDate:"Date",vhfFrom:"From",vhfTo:"To",vhfFreq:"Frequency",vhfMode:"Mode",vhfProp:"Propagation",vhfAnt:"Antenna",vhfPower:"Power",vhfReport:"Report",vhfNotes:"Notes",vhfPropTypes:"Propagation types tracked",vhfPropTypesText:"Terrain reflection, tropospheric propagation, marine ducting, direct paths and unusual openings.",vhfZones:"Areas of interest",vhfZonesText:"Reunion Island, Mauritius, Rodrigues, Madagascar, Mayotte, Mozambique, Southern Africa and East Africa.",vhfGoal:"Goal",vhfGoalText:"Build a database of real reports to compare distance, terrain, weather, antennas, polarization and received levels.",gearEyebrow:"Reference station",gearTitle:"Equipment used in Reunion Island",receivers:"Receivers",dishes:"Dishes",
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
 document.getElementById("satCards").innerHTML=SATELLITES.map(s=>`
 <article class="sat-profile">
   <div class="sat-head">
     <div>
       <div class="pos">${s.pos}</div>
       <h3>${s.name}</h3>
     </div>
     <span class="operator">${s.operator}</span>
   </div>
   <div class="sat-meta">
     <div><span class="meta-label">Bandes</span><strong>${s.bands.join(" / ")}</strong></div>
     <div><span class="meta-label">Lancement</span><strong>${s.launch}</strong></div>
   </div>
   <div class="profile-block">
     <h4>Faisceaux utiles</h4>
     <div class="tags">${s.beams.map(x=>`<span class="tag">${x}</span>`).join("")}</div>
   </div>
   <div class="profile-block">
     <h4>Zones concernées</h4>
     <p>${s.zones.join(" · ")}</p>
   </div>
   <div class="profile-block practical-box">
     <h4>Réglage pratique</h4>
     <p>Voir le tableau « Réglage rapide » pour la fréquence de pointage conseillée et la taille de parabole.</p>
   </div>
   <div class="profile-block">
     <h4>Intérêt DX</h4>
     <p>${s.dx}</p>
   </div>
   <div class="sat-actions">
     <a class="btn primary" href="${s.officialMap}" target="_blank" rel="noopener">Carte officielle ↗</a>
     ${s.officialPdf ? `<a class="btn" href="${s.officialPdf}" target="_blank" rel="noopener">Brochure / PDF ↗</a>` : ""}
   </div>
 </article>`).join("");
 document.getElementById("beamCards").innerHTML=BEAMS.map(b=>`<article class="beam-card"><h3>${b.name}</h3><p><strong>${b.sat}</strong></p><p>${b.zone}</p><p>${b.note}</p></article>`).join("");
 document.getElementById("ftaCards").innerHTML=FTA.map(f=>`<article class="fta-card"><h3>${f.name}</h3><p>${f.sat}</p><p><strong>${f.freq}</strong></p><p>${f.place} — <span class="status ${statusClass(f.status)}">${f.status}</span></p></article>`).join("");
 document.getElementById("newsCards").innerHTML=NEWS.map(n=>`<article class="news-card">
<div class="news-date">${n.date}</div><div class="news-type">${n.type}</div><h3>${n.title}</h3><p>${n.text}</p>
${n.source?`<a class="btn" href="${n.source}" target="_blank" rel="noopener">Source ↗</a>`:""}
</article>`).join("");
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


function renderVhf(){
 const q=(document.getElementById("vhfSearch")?.value||"").toLowerCase();
 const p=document.getElementById("vhfPropFilter")?.value||"";
 const rows=VHF_TESTS.filter(t=>{
   const hay=Object.values(t).join(" ").toLowerCase();
   return (!q||hay.includes(q))&&(!p||t.prop===p);
 });
 const el=document.getElementById("vhfBody");
 if(!el) return;
 el.innerHTML=rows.map(t=>`<tr>
 <td>${t.date}</td><td>${t.from}</td><td>${t.to}</td><td>${t.freq}</td><td>${t.mode}</td>
 <td>${t.prop}</td><td>${t.antenna}</td><td>${t.power}</td><td>${t.report}</td><td>${t.notes}</td>
 </tr>`).join("");
}
window.addEventListener("DOMContentLoaded",()=>{
 renderVhf();
 ["vhfSearch","vhfPropFilter"].forEach(id=>document.getElementById(id)?.addEventListener("input",renderVhf));
});


function difficultyClass(d){
  return d==="Facile"?"easy":d==="Moyen"?"medium":"dx";
}
function renderQuick(){
  const el=document.getElementById("quickBody");
  if(!el || typeof QUICK_POINTING==="undefined") return;
  el.innerHTML=QUICK_POINTING.map(x=>`<tr>
    <td><strong>${x.sat}</strong></td>
    <td>${x.pos}</td>
    <td>${x.band}</td>
    <td><strong>${x.freq}</strong></td>
    <td>${x.beam}</td>
    <td>${x.dish}</td>
    <td>${x.lnb}</td>
    <td><span class="difficulty ${difficultyClass(x.difficulty)}">${x.difficulty}</span></td>
    <td>${x.checked}</td>
  </tr>`).join("");
}
window.addEventListener("DOMContentLoaded",renderQuick);


const CONTRIBUTION_EMAIL = "fr1deltaindia@gmail.com"; // Exemple : "votre-adresse@gmail.com"

function buildContributionMailto(){
  const link=document.getElementById("mailtoReport");
  const template=document.getElementById("mailTemplate");
  if(!link || !template) return;
  const subject="CONTRIBUTION DXSAT974";
  const body=template.textContent.replace(/^Objet :.*\n\n?/,"");
  if(CONTRIBUTION_EMAIL){
    link.href=`mailto:${CONTRIBUTION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }else{
    link.href=`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
async function copyContributionTemplate(){
  const template=document.getElementById("mailTemplate");
  const button=document.getElementById("copyReport");
  if(!template) return;
  try{
    await navigator.clipboard.writeText(template.textContent);
    if(button){
      const old=button.textContent;
      button.textContent="Modèle copié ✓";
      setTimeout(()=>button.textContent=old,1800);
    }
  }catch(e){
    alert("Sélectionnez le modèle et copiez-le manuellement.");
  }
}
window.addEventListener("DOMContentLoaded",()=>{
  buildContributionMailto();
  document.getElementById("copyReport")?.addEventListener("click",copyContributionTemplate);
});
