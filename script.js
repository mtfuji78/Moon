const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const letter = document.getElementById("letter");
const button = document.getElementById("giftBtn");


// Stars ⭐

for(let i = 0; i < 120; i++){

    let s = document.createElement("div");

    s.className = "star";

    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";

    s.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(s);

}


// Hearts ♡

for(let i = 0; i < 25; i++){

    let h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "♡";

    h.style.left = Math.random() * 100 + "%";

    h.style.animationDuration = (5 + Math.random() * 6) + "s";

    h.style.animationDelay = Math.random() * 5 + "s";

    h.style.fontSize = (18 + Math.random() * 18) + "px";

    hearts.appendChild(h);

}


// Fireworks button 🎀

button.onclick = () => {

    letter.style.display = "block";

    fireworks();

};



// Fireworks 🎆

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");


function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


let particles = [];


function fireworks(){

    let x = Math.random() * canvas.width;
    let y = Math.random() * (canvas.height * 0.5);


    let colors = [
        "#ff80b6",
        "#ffd1e5",
        "#ffffff",
        "#ff4e94",
        "#ffe066"
    ];


    for(let i = 0; i < 60; i++){

        let angle = Math.random() * Math.PI * 2;
        let speed = Math.random() * 4 + 1;


        particles.push({

            x:x,
            y:y,

            dx:Math.cos(angle) * speed,
            dy:Math.sin(angle) * speed,

            size:Math.random() * 3 + 1,

            color:colors[Math.floor(Math.random()*colors.length)],

            life:60

        });

    }

}


function animateFireworks(){

    requestAnimationFrame(animateFireworks);


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach((p,index)=>{


        p.x += p.dx;
        p.y += p.dy;


        p.dy += 0.05;


        p.life--;


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );


        ctx.fillStyle = p.color;

        ctx.globalAlpha = p.life / 60;

        ctx.fill();


        if(p.life <= 0){

            particles.splice(index,1);

        }


    });


    ctx.globalAlpha = 1;

}


animateFireworks();
