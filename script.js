const CSV_URL='https://docs.google.com/spreadsheets/d/e/2PACX-1vTM-b3ithJV4yC4l3qKdZPHEE4vG2aJna_R7hGbc2P0t8KANSLCE7rcrk3w1lRC-GI8ReS7LbW4dtsJ/pub?output=csv';
const city=document.getElementById('city'),district=document.getElementById('district'),results=document.getElementById('results');let rows=[];
fetch(CSV_URL).then(r=>r.text()).then(t=>{rows=t.trim().split('\n').slice(1).map(x=>x.split(','));city.innerHTML=[...new Set(rows.map(r=>r[0]))].map(c=>`<option>${c}</option>`).join('');loadDistrict();});
city.onchange=loadDistrict;district.onchange=show;
function loadDistrict(){district.innerHTML=[...new Set(rows.filter(r=>r[0]===city.value).map(r=>r[1]))].map(d=>`<option>${d}</option>`).join('');show();}
function show(){results.innerHTML='';rows.filter(r=>r[0]===city.value&&r[1]===district.value).forEach(r=>{const u='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(r[4]);results.innerHTML+=`<div class="card"><b>📅 ${r[2]}（${r[3]}）</b><br><a target="_blank" href="${u}">📍 ${r[4]}</a></div>`;});}
