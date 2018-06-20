var A, B, C, D, E, F;

A = [
    {
        pseudo:"Quiiwi",
        password:"azerty",
        mail:"quiiwiki@gmail.com",
        stat:"ADMIN"
    },
    {
        pseudo:"Draski",
        password:"1234",
        mail:"kiwikili@hotmail.fr",
        stat:"Membre"
    }
];

function myFunction(){
    B = document.getElementById("pseudo").value;
    C = document.getElementById("password").value;
    D = document.getElementById("email").value;
    K = "Membre";

    A.push({"pseudo":B, "password":C, "mail":D, "stat":K});

    console.log(A);
}

function myFunctionReset(){
    document.getElementById("donnees").reset();
}

function myFunctionConnexion(){

    var G = prompt(" Tappez votre pseudo");
    if(G === "Quiiwi"){
        var H = prompt(" Tappez votre mot de passe")
        if(H === "azerty"){
            var I = document.getElementById("origine");
            I.innerHTML = "Membre";
            var J = document.getElementById("god");
            J.innerHTML = "ADMIN / GOD";
        }
    } 
}