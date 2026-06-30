/* ==========================
   Isha ❤️ Hritik
   Phase 3 Script
========================== */

const heartsContainer = document.getElementById("hearts");

/* -----------------------
   Floating Hearts
------------------------ */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="🤍";

    heart.style.position="absolute";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="110vh";
    heart.style.fontSize=(18+Math.random()*18)+"px";
    heart.style.opacity=.7;
    heart.style.pointerEvents="none";
    heart.style.transition="transform 10s linear, opacity 10s linear";

    heartsContainer.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform=`translateY(-130vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity=0;

    });

    setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,500);

/* -----------------------
   Pages
------------------------ */

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");

document.getElementById("startBtn").onclick=()=>{

    page1.classList.add("fade-out");

    setTimeout(()=>{

        page1.classList.add("hidden");

        page2.classList.remove("hidden");
        page2.classList.add("fade-in");

    },600);

};

document.getElementById("continueBtn").onclick=()=>{

    page2.classList.add("fade-out");

    setTimeout(()=>{

        page2.classList.add("hidden");

        page3.classList.remove("hidden");
        page3.classList.add("fade-in");

    },600);

};

/* -----------------------
   Runaway No Button
------------------------ */

const noBtn=document.getElementById("noBtn");

const funnyTexts=[
"No 🤭",
"Try Again 😜",
"Not Happening 😂",
"Catch Me 😏",
"Wrong Choice 🙈",
"Nope ❤️",
"Almost 😂",
"Too Slow 😆"
];

let attempt=0;

function moveButton(){

    const parent=noBtn.parentElement;

    const maxX=parent.clientWidth-170;
    const maxY=150;

    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*maxX+"px";
    noBtn.style.top=Math.random()*maxY+"px";

    noBtn.innerText=funnyTexts[attempt%funnyTexts.length];

    attempt++;

}

noBtn.addEventListener("mouseenter",moveButton);
noBtn.addEventListener("click",moveButton);

document.getElementById("yesBtn").onclick=()=>{

    alert("🎉 Confetti coming in Phase 4 ❤️");

};
