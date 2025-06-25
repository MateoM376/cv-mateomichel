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
