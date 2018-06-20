var A, B, C, D, E, F, K;

A = [
    {
        pseudo:"Quiiwi",
        password:"azerty",
        mail:"quiiwiki@gmail.com",
        stat:"Membre",
        pouvoir:"ADMIN"
    },
    {
        pseudo:"Draski",
        password:"1234",
        mail:"kiwikili@hotmail.fr",
        stat:"Membre",
        pouvoir:"Moins que rien"
    }
];

function myFunction(){
    B = document.getElementById("pseudo").value;
    C = document.getElementById("password").value;
    D = document.getElementById("email").value;
    K = "Membre";
    Q = "Moins que rien"

    A.push({"pseudo":B, "password":C, "mail":D, "stat":K, "pouvoir":Q});

    console.log(A);
}

function myFunctionReset(){
    document.getElementById("donnees").reset();
}

/* function myFunctionConnexion(){

    var G = prompt(" Tappez votre pseudo");
    if(G === "Quiiwi"){
        var H = prompt(" Tappez votre mot de passe")
        if(H === "azerty"){
            var I = document.getElementById("origine");
            I.innerHTML = "Membre";
            var J = document.getElementById("god");
            J.innerHTML = "ADMIN / GOD";
        }
    }else if(G === "Draski"){
        var H = prompt(" Tappez votre mot de passe")
        if(H === "1234"){
            var I = document.getElementById("origine");
            I.innerHTML = "Membre";
        }
    }
} */
function myFunctionConnexion(){

    var I = document.getElementById("origine");
    I.innerHTML = "Visiteur";
    var J = document.getElementById("god");
    J.innerHTML = "Moins que rien";


    var G = prompt(" Tappez votre pseudo");
    for(var L = 0; L < A.length; L++){
        if(A[L].pseudo === G){
            var H = prompt(" Tappez votre mot de passe")
            for(var O = 0; O < A.length; O++){
                if(A[L].password === H){
                    for(var P = 0; P < A.length; P++){
                        if(A[L].pouvoir === "ADMIN"){
                            var I = document.getElementById("origine");
                            I.innerHTML = "Membre";
                            var J = document.getElementById("god");
                            J.innerHTML = "ADMIN / GOD";
                        }else {
                            var I = document.getElementById("origine");
                            I.innerHTML = "Membre";
                            var J = document.getElementById("god");
                            J.innerHTML = "Moins que rien";
                        }
                    } 
                }
            }
        }
    }
}