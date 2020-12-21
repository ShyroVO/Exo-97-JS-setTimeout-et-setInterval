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

function tiniTime (){
    let timeOut = setInterval(function (){
        if (variableChiffre < 60) {
            compteur.innerHTML = variableChiffre;
            variableChiffre++;
        } else if (variableChiffre === 60) {
            variableChiffre = 0;
            variableSoixante++;
            document.getElementById('divMoche').innerHTML = variableSoixante;
        }
    }, 1000);

    document.getElementById('interval-stop').addEventListener('click', function (){
        clearInterval(timeOut);
    })

}

//Start:
document.getElementById('interval-start').addEventListener('click', tiniTime);
