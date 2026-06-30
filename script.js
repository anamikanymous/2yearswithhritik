/* ==========================
   Isha ❤️ Hritik
   Phase 1 Script
========================== */

const heartsContainer = document.getElementById("hearts");

/* Floating Hearts */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

   heart.style.position = "absolute";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.top = "110vh";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.opacity = .7;

    heart.style.pointerEvents = "none";

    heart.style.transition = "transform linear, opacity linear";

    heart.style.zIndex = 1;

    heartsContainer.appendChild(heart);

    const duration = 7000 + Math.random()*4000;

    requestAnimationFrame(()=>{

        heart.style.transform =
        `translateY(-130vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = 0;

    });

    setTimeout(()=>{

        heart.remove();

    },duration);

}

setInterval(createHeart,500);

/* Button */

document.getElementById("startBtn").addEventListener("click",()=>{

    alert("✨ The surprise begins in Phase 2 ❤️");

});
