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

// Realistic Fireworks 🎆

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


window.onresize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
};


let particles = [];


function fireworks(){

    let x = Math.random() * canvas.width;
    let y = Math.random() * (canvas.height / 2);


    let colors = [
        "#ff80b6",
        "#ffd1e5",
        "#ffffff",
        "#ff4e94",
        "#ffe066",
        "#a8e6ff"
    ];


    for(let i = 0; i < 60; i++){

        let angle = Math.random() * Math.PI * 2;
        let speed = Math.random() * 4 + 1;


        particles.push({

            x:x,
            y:y,

            dx:Math.cos(angle) * speed,
            dy:Math.sin(angle) * speed,

            size:Math.random()*3+1,

            color:colors[Math.floor(Math.random()*colors.length)],

            life:70

        });

    }

}



function animateFireworks(){

    requestAnimationFrame(animateFireworks);

    ctx.clearRect(0,0,canvas.width,canvas.height);


    particles.forEach((p,index)=>{


        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.05;

        p.life -= 2;


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );


        ctx.fillStyle = p.color;

        ctx.globalAlpha = (p.life / 70) * 0.7;

        ctx.fill();


        if(p.life <= 0){

            particles.splice(index,1);

        }


    });


    ctx.globalAlpha = 1;

}


animateFireworks();
