const stars=document.getElementById("stars");
const hearts=document.getElementById("hearts");
const letter=document.getElementById("letter");
const button=document.getElementById("giftBtn");

// Stars

for(let i=0;i<120;i++){

let s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.animationDelay=Math.random()*3+"s";

stars.appendChild(s);

}

// Hearts

for(let i=0;i<25;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="♡";

h.style.left=Math.random()*100+"%";

h.style.animationDuration=(5+Math.random()*6)+"s";

h.style.animationDelay=Math.random()*5+"s";

h.style.fontSize=(18+Math.random()*18)+"px";

hearts.appendChild(h);

}

button.onclick=()=>{

letter.style.display="block";

fireworks();

}

// Fireworks

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=innerWidth;

canvas.height=innerHeight;

function fireworks(){

for(let i=0;i<80;i++){

let x=Math.random()*canvas.width;

let y=Math.random()*canvas.height/2;

ctx.beginPath();

ctx.arc(x,y,3,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},1200);

}