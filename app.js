
const $=id=>document.getElementById(id);
let players=[],scores=[],hole=1,wolf=0,partner=null,lone=false;
start.onclick=()=>{
players=[p0.value||'P1',p1.value||'P2',p2.value||'P3',p3.value||'P4'];
scores=[0,0,0,0];hole=1;wolf=0;
setup.style.display='none';game.style.display='block';render();
};
function mult(){return hole>=15?2:1;}
function render(){
hole.textContent=`Hole ${hole} of 18`;
wolf.textContent=`🐺 Wolf: ${players[wolf]}`;
scoresDiv();
partners.innerHTML="";partner=null;lone=false;
players.forEach((n,i)=>{if(i===wolf)return;let b=document.createElement('button');b.textContent=n;b.onclick=()=>{partner=i;lone=false;status.textContent="Partner: "+n};partners.appendChild(b);});
let lb=document.createElement('button');lb.textContent="🐺 Lone Wolf";lb.onclick=()=>{partner=null;lone=true;status.textContent="Lone Wolf selected"};partners.appendChild(lb);
}
function scoresDiv(){
scores.innerHTML="<div class='card'><b>Leaderboard</b><br>"+players.map((p,i)=>`${p}: ${scores[i]}`).join("<br>")+"</div>";
}
function advance(){
if(hole===18){status.textContent="Round Complete";render();return;}
hole++;wolf=(wolf+1)%4;render();
}
wolfWin.onclick=()=>{
let m=mult();
if(lone){scores[wolf]+=3*m;}
else if(partner!==null){scores[wolf]+=m;scores[partner]+=m;}
else{return alert("Select a partner or Lone Wolf.");}
advance();
};
oppWin.onclick=()=>{
let m=mult();
if(lone){for(let i=0;i<4;i++)if(i!==wolf)scores[i]+=m;}
else if(partner!==null){for(let i=0;i<4;i++)if(i!==wolf&&i!==partner)scores[i]+=m;}
else{return alert("Select a partner or Lone Wolf.");}
advance();
};
