const players=['Player 1','Player 2','Player 3','Player 4'];
const scores=[0,0,0,0];
let wolf=0;
const board=document.getElementById('board');
const partners=document.getElementById('partners');
function drawBoard(){
 board.innerHTML='';
 players.map((p,i)=>({p,s:scores[i]}))
 .sort((a,b)=>b.s-a.s)
 .forEach(r=>{
   board.innerHTML+=`<tr><td>${r.p}</td><td>${r.s}</td></tr>`;
 });
 document.getElementById('wolf').textContent=players[wolf];
}
function drawPartners(){
 partners.innerHTML='';
 players.forEach((p,i)=>{
   if(i===wolf)return;
   const b=document.createElement('button');
   b.textContent=p;
   partners.appendChild(b);
 });
}
drawBoard();
drawPartners();
