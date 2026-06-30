/* ==========================
   Isha ❤️ Hritik
   Phase 2 Script
========================== */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "110vh";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = .7;
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 10s linear, opacity 10s linear";
    heart.style.zIndex = 1;

    heartsContainer.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-130vh) rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = 0;

    });

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);


/* ---------- PAGE TRANSITIONS ---------- */

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

document.getElementById("startBtn").addEventListener("click", () => {

    page1.classList.add("fade-out");

    setTimeout(() => {

        page1.classList.add("hidden");

        page2.classList.remove("hidden");
        page2.classList.add("fade-in");

    }, 600);

});


document.getElementById("continueBtn").addEventListener("click", () => {

    alert("❤️ The big question comes in Phase 3 ❤️");

});
