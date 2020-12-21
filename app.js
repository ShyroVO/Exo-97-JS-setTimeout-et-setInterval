document.getElementById('timeout').addEventListener('click', function () {
    setTimeout(function (){
        let bebeDiv = document.createElement('div');
        document.getElementById('timeout-div').appendChild(bebeDiv);
        bebeDiv.style.border = "solid saddlebrown 1px"
        bebeDiv.innerHTML = "Mon timout vient de créer ce div 2s après le click sur le bouton!"

    }, 2000);
})

let compteur = document.getElementById('interval-div');
let variableChiffre = 0;
let variableSoixante = 0;

function time () {
    if (variableChiffre < 60) {
        compteur.innerHTML = variableChiffre;
        variableChiffre++;
    } else if (variableChiffre === 60) {
        variableChiffre = 0;
        variableSoixante++;
        document.getElementById('divMoche').innerHTML = variableSoixante;
    }
}

//Start:
document.getElementById('interval-start').addEventListener('click', function(){
    setInterval(time ,1000);
});

//Stop
document.getElementById('interval-stop').addEventListener('click', function (){
    clearTimeout(time);
})

//    S'arrêter lors du clic sur le bouton #interval-stop.
//Incrémenter une variable de 60 ( toutes les 60 secondes du coups )
//A chaque fois mettre à jour le contenu du div #interval-div avec la nouvelle valeur de la variable incrémentée.