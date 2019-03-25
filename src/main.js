const searchData = window.INJURIES;

const homeButton = document.getElementById("home-menu-btn");
const aboutButton = document.getElementById("about-menu-btn");
const contactButton = document.getElementById("contact-menu-btn");
const typeButton = document.getElementById("tipo-menu-btn");
const yearButton = document.getElementById("año-menu-btn");
const homeScreen = document.getElementById("home-screen");
const aboutScreen = document.getElementById("about-us-screen");
const contactScreen = document.getElementById("contact-us-screen");
const typeScreen = document.getElementById("type-accident-screen");
const yearScreen = document.getElementById("year-accident-screen");
const trainScreen=document.getElementById("train-screen");
const trainBtn=document.getElementById("train");
const boatScreen=document.getElementById("boat-screen");
const boatBtn=document.getElementById("boat");
const result=document.getElementById("result");
const selectOption=document.getElementById("Years");
const seeDataBtn =document.getElementById("see-data");
const formulario=document.querySelector("#formulario");
const boton =document.querySelector("#boton");
const resultado=document.querySelector("#resultado");

aboutScreen.style.display = "none";
contactScreen.style.display = "none";
typeScreen.style.display = "none";
yearScreen.style.display = "none";
boatScreen.style.display = "none";
trainScreen.style.display = "block";



homeButton.addEventListener("click", () => {
    homeScreen.style.display = "block";
    aboutScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "none";

});

aboutButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    yearScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "none";
    aboutScreen.style.display = "block";
});

contactButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    typeScreen.style.display = "none";
    yearScreen.style.display = "none";
    aboutScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "none";
    contactScreen.style.display = "block";
});

typeButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    yearScreen.style.display = "none";
    aboutScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "none";
    typeScreen.style.display = "block";
});

yearButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    aboutScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "none";
    yearScreen.style.display = "block";
});

trainBtn.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    aboutScreen.style.display = "none";
    yearScreen.style.display = "none";
    boatScreen.style.display = "none";
    trainScreen.style.display = "block";
    document.getElementById("data-train").innerHTML = window.trains(INJURIES);
});

boatBtn.addEventListener("click", () => {
    homeScreen.style.display = "none";
    contactScreen.style.display = "none";
    typeScreen.style.display = "none";
    aboutScreen.style.display = "none";
    yearScreen.style.display = "none";
    trainScreen.style.display = "none";
    boatScreen.style.display = "block";
    document.getElementById("data-boats").innerHTML = window.showBoats(INJURIES);

});
seeDataBtn.addEventListener("click",()=>{
    const option=document.getElementById("Years").value;

  result.innerHTML=window.showAccidentsByYear(INJURIES,option);
  result.innerHTML=window.showAccidentsByYear(INJURIES,option);
  });







  //search interno
  const contenidos=[
    {nombre:'Valeria'},
    {nombre:'Rocio'},
    {nombre:'recreational'},
    {nombre:'injuries'},
    {nombre:'train'},
]
const filtrar =()=>{
    // console.log(formulario.value);
    resultado.innerHTML='';
    const texto=formulario.value.toLowerCase();
    for(let contenido of contenidos ){
        let nombre=contenido.nombre.toLowerCase();
        if(nombre.indexOf(texto)!==-1){
            resultado.innerHTML +=`
            <li>${contenido.nombre}</li>
            `
        }
    }
    if( resultado.innerHTML === ''){
       resultado.innerHTML +=`
            <li>contenido no encontrado...</li>
            `
    }

 }
 boton.addEventListener('click',filtrar)
 formulario.addEventListener('keyup', filtrar)
 filtrar();

 //ordenar Train
 //How Program Starts by Default in Train Stats
const newArrFiltered = window.roadEye.filtersYears(INJURIES);
let newArr = window.roadEye.newArrTrainYear(newArrFiltered);
newArr = window.roadEye.sortYearsOld(newArr);
let tableHtmlTrain = document.querySelector('#tabla-train tbody');
window.roadEye.fillTableTrain(tableHtmlTrain, newArr);





let sortOldNew = () => {
    const buttonOld = document.getElementById('descendiente');
    buttonOld.onclick = function () {
        event.preventDefault();
        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrTrainYear(newArrFiltered);
        newArr = window.roadEye.sortYearsOld(newArr);
        let tableHtmlTrain = document.querySelector('#tabla-train tbody');
        tableHtmlTrain.innerHTML = "";
        window.roadEye.fillTableTrain(tableHtmlTrain, newArr);
    };
};

let sortNewOld = () => {
    const buttonNew = document.getElementById('ascendente');
    buttonNew.onclick = function () {
        event.preventDefault();
        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrTrainYear(newArrFiltered);
        newArr = window.roadEye.sortYearsNew(newArr);
        let tableHtmlTrain = document.querySelector('#tabla-train tbody');
        tableHtmlTrain.innerHTML = "";
        window.roadEye.fillTableTrain(tableHtmlTrain, newArr);
    };
};

document.getElementById('descendiente').addEventListener('click', sortOldNew);
document.getElementById('ascendente').addEventListener('click', sortNewOld);
//ordenar Boating
