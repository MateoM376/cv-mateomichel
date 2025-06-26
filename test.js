function cacherpartie1(){
let partie2 = document.getElementById("partie1")
.style.display = "none";
}
function cacherpartie2(){
let partie2 = document.getElementById("partie2")
.style.display = "none";
}
function cacherpartie3(){
let partie2 = document.getElementById("partie3")
.style.display = "none";
}
function cacherpartie4(){
let partie2 = document.getElementById("partie4")
.style.display = "none";
}
function montrerpartie1(){
   document.getElementById("partie1").style.display = "block";
}
function montrerpartie2(){
   document.getElementById("partie2").style.display = "block";
}
function montrerpartie3(){
   document.getElementById("partie3").style.display = "block";
}
function montrerpartie4(){
   document.getElementById("partie4").style.display = "block";
}
document.querySelectorAll('.cv-left button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cv-left button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    })
})
// Ajoute la gestion de la classe 'selected' pour les boutons du menu mobile
document.querySelectorAll('.cv-top button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.cv-top button').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        // Défilement doux vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
function repositionnerBoutonsSelonTaille() {
    const largeur = window.innerWidth;
    const boutongauche = document.getElementById("boutonleft");
    const boutonhaut = document.getElementById('boutontop');
if (largeur <= 1000) {
   boutonhaut.style.display = "block";
   boutongauche.style.display = "none";
} else {
   boutonhaut.style.display = "none";
   boutongauche.style.display = "block";
     
    }
}
window.addEventListener("resize", repositionnerBoutonsSelonTaille);
document.querySelectorAll('.cv-left button, .cv-top button').forEach(btn => {
    btn.addEventListener('keydown', function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            btn.click();
        }
    });
});
function addArrowNavigation(selector) {
    const buttons = Array.from(document.querySelectorAll(selector));
    buttons.forEach((btn, idx) => {
        btn.addEventListener('keydown', function(e) {
            let nextIdx = null;
            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                nextIdx = (idx + 1) % buttons.length;
            } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                nextIdx = (idx - 1 + buttons.length) % buttons.length;
            }
            if (nextIdx !== null) {
                buttons[nextIdx].focus();
                e.preventDefault();
            }
        });
    });
}

addArrowNavigation('.cv-left button');
addArrowNavigation('.cv-top button');
// Ajoute la gestion de la classe 'selected' au focus (clavier ou souris)
// et active le bouton automatiquement au focus
document.querySelectorAll('.cv-left button, .cv-top button').forEach(btn => {
    btn.addEventListener('focus', function() {
        // On retire 'selected' à tous les boutons du même menu
        const parent = btn.closest('.cv-left, .cv-top');
        parent.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        // Active le bouton automatiquement au focus
        btn.click();
    });
});
window.addEventListener('DOMContentLoaded', function() {
    // Affiche le bon menu selon la taille de l'écran
    repositionnerBoutonsSelonTaille();

    // Focus automatique sur le bouton "Profil" visible
    let profilBtn = null;
    if (window.innerWidth <= 1000) {
        profilBtn = document.querySelector('.cv-top button.selected');
    } else {
        profilBtn = document.querySelector('.cv-left button.selected');
    }
    if (profilBtn) {
        profilBtn.focus();
    }
});
