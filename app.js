
let players=[],scores=[],hole=1,wolf=0,partner=-1;
const $=i=>document.getElementById(i);
start.onclick=()=>{
players=[p0.value||"P1",p1.value||"P2",p2.value||"P3",p3.value||"P4"];
scores=[0,0,0,0];
hole=1;wolf=0;
game.classList.remove("hide");
render();
}
function mult(){return hole>=15?2:1;}
function render(){
holeEl=$("hole");holeEl.textContent="Hole "+hole+" of 18";
$("wolf").textContent="🐺 "+players[wolf];
const b=$("board");b.innerHTML="";
players.map((n,i)=>({n,s:scores[i]})).sort((a,b)=>b.s-a.s).forEach(r=>{
b.innerHTML+=`<tr><td>${r.n}</td><td>${r.s}</td></tr>`;
});
const p=$("partners");p.innerHTML="";
partner=-1;
players.forEach((n,i)=>{
 if(i===wolf)return;
 let bt=document.createElement("button");
 bt.textContent=n;
 bt.onclick=()=>{partner=i;};
 p.appendChild(bt);
});
let lone=document.createElement("button");
lone.textContent="🐺 Lone Wolf";
lone.onclick=()=>{partner=-1;};
p.appendChild(lone);
}
wolfWin.onclick=()=>{
let m=mult();
if(partner==-1){scores[wolf]+=3*m;}
else{scores[wolf]+=m;scores[partner]+=m;}
next();
}
oppWin.onclick=()=>{
let m=mult();
if(partner==-1){
for(let i=0;i<4;i++)if(i!==wolf)scores[i]+=m;
}else{
for(let i=0;i<4;i++)if(i!==wolf&&i!==partner)scores[i]+=m;
}
next();
}
function next(){
if(hole===18){
render();
alert("Round Complete!");
return;
}
hole++;
wolf=(wolf+1)%4;
render();
}
