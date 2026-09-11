const body=document.getElementById('body'),q=document.getElementById('q'),band=document.getElementById('band'),res=document.getElementById('res');
function render(){let t=q.value.toLowerCase();let rows=TESTS.filter(x=>(!t||Object.values(x).join(' ').toLowerCase().includes(t))&&(!band.value||x.band===band.value)&&(!res.value||x.result===res.value));body.innerHTML=rows.map(x=>`<tr><td>${x.date}</td><td>${x.sat}</td><td>${x.pos}</td><td>${x.band}</td><td>${x.freq}</td><td>${x.sr}</td><td>${x.service}</td><td>${x.dish}</td><td>${x.measure}</td><td class="${x.result==='Réussi'?'ok':x.result==='Échec'?'bad':'part'}">${x.result}</td></tr>`).join('')}
[q,band,res].forEach(e=>e.addEventListener('input',render));
document.getElementById('cards').innerHTML=SATS.map(s=>`<article><div class="pos">${s[1]}</div><h3>${s[0]}</h3><p>${s[2]}</p></article>`).join('');
document.getElementById('nTests').textContent=TESTS.length;document.getElementById('nSats').textContent=new Set(TESTS.map(x=>x.sat)).size;document.getElementById('nOk').textContent=TESTS.filter(x=>x.result==='Réussi').length;render();

const newsFeed=document.getElementById('newsFeed');
const newsType=document.getElementById('newsType');
const newsSat=document.getElementById('newsSat');
const typeClass={"Mouvement orbital":"tag-move","Nouvelle chaîne":"tag-channel","Transpondeur":"tag-transponder","Test":"tag-test","Arrêt":"tag-stop"};
[...new Set(NEWS.map(n=>n.sat))].sort().forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;newsSat.appendChild(o)});
function renderNews(){
 const rows=NEWS.filter(n=>(!newsType.value||n.type===newsType.value)&&(!newsSat.value||n.sat===newsSat.value)).sort((a,b)=>b.date.localeCompare(a.date));
 newsFeed.innerHTML=rows.length?rows.map(n=>`<article class="news-item"><div class="news-date">${n.date}</div><div class="news-main"><span class="tag ${typeClass[n.type]||'tag-test'}">${n.type}</span><span class="tag">${n.sat}</span><h3>${n.title}</h3><p>${n.text}</p>${n.url?`<a class="source-link" href="${n.url}" target="_blank" rel="noopener">Source : ${n.source} ↗</a>`:`<span class="source-link">Source : ${n.source}</span>`}</div></article>`).join(''):'<div class="news-empty">Aucune information dans ce filtre.</div>';
}
[newsType,newsSat].forEach(e=>e.addEventListener('input',renderNews));renderNews();

function applyDynamicLang(lang){
  const map = lang === "en" ? {
    "Réussi":"Success","Partiel":"Partial","Échec":"Failed",
    "Mouvement orbital":"Orbital movement","Nouvelle chaîne":"New channel",
    "Changement de fréquence":"Frequency change","Arrêt":"Service stop","Test":"Test",
    "Source":"Source"
  } : null;
  if(!map) return;
  document.querySelectorAll("td, .pill, .news-type, .source-label").forEach(el=>{
    const t=el.textContent.trim();
    if(map[t]) el.textContent=map[t];
  });
}
window.addEventListener("dxsat-lang-change",e=>setTimeout(()=>applyDynamicLang(e.detail.lang),0));
