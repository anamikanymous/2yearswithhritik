/* ==========================
   Isha ❤️ Hritik
========================== */

/* ---------- Floating Hearts ---------- */

const heartsContainer = document.getElementById("hearts");

const bgMusic = document.getElementById("bgMusic");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "110vh";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.opacity = ".7";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 10s linear, opacity 10s linear";
    heart.style.zIndex = "1";

    heartsContainer.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            `translateY(-130vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = 0;

    });

    setTimeout(() => heart.remove(),10000);

}

setInterval(createHeart,500);


/* ---------- Pages ---------- */

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const page5=document.getElementById("page5");


/* ---------- Page 1 ---------- */

document.getElementById("startBtn").onclick = () => {

    bgMusic.play().catch(error => {
        console.log("Music couldn't autoplay:", error);
    });

    page1.classList.add("fade-out");

    setTimeout(() => {

        page1.classList.add("hidden");

        page2.classList.remove("hidden");
        page2.classList.add("fade-in");

    }, 600);

};


/* ---------- Page 2 ---------- */

document.getElementById("continueBtn").onclick=()=>{

    page2.classList.add("fade-out");

    setTimeout(()=>{

        page2.classList.add("hidden");

        page3.classList.remove("hidden");
        page3.classList.add("fade-in");

    },600);

};


/* ---------- NO Button ---------- */

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


/* ---------- Confetti ---------- */

function createConfetti(){

    const colors=[
        "#D4AF37",
        "#E8CFC3",
        "#F5E6D3",
        "#C08457",
        "#FFFFFF"
    ];

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";
        piece.style.top="-20px";

        piece.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDelay=Math.random()+"s";

        document.body.appendChild(piece);

        setTimeout(()=>piece.remove(),3000);

    }

}


/* ---------- YES Button ---------- */

document.getElementById("yesBtn").onclick=()=>{

    page3.classList.add("fade-out");

    setTimeout(()=>{

        page3.classList.add("hidden");

        page4.classList.remove("hidden");
        page4.classList.add("fade-in");

        createConfetti();

        setTimeout(()=>{

            page4.classList.add("fade-out");

            setTimeout(()=>{

                page4.classList.add("hidden");

                page5.classList.remove("hidden");
                page5.classList.add("fade-in");

            },600);

        },4000);

    },600);

};


/* ---------- Gallery Button ---------- */

const galleryBtn = document.getElementById("galleryNextBtn");

if (galleryBtn) {

    galleryBtn.onclick = () => {

        page5.classList.add("fade-out");

        setTimeout(() => {

            page5.classList.add("hidden");

            document.getElementById("page6").classList.remove("hidden");
            document.getElementById("page6").classList.add("fade-in");

        }, 600);

    };

}
/* ---------- Final Button ---------- */

const finalBtn = document.getElementById("finalBtn");

if(finalBtn){

    finalBtn.onclick = () => {

        const page6 = document.getElementById("page6");
        const page7 = document.getElementById("page7");

        page6.classList.add("fade-out");

        setTimeout(() => {

            page6.classList.add("hidden");

            page7.classList.remove("hidden");
            page7.classList.add("fade-in");

        }, 600);

    };

}
