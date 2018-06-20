
var A, B, C, D;

A = [
    {
        pseudo:"Quiiwi",
        password:"azerty",
        mail:"quiiwiki@gmail.com"
    },
    {
        pseudo:"Draski",
        password:"1234",
        mail:"kiwikili@hotmail.fr"
    }
];

function myFunction(){
    B = document.getElementById("pseudo").value;
    C = document.getElementById("password").value;
    D = document.getElementById("email").value;

    A.push({"pseudo":B, "password":C, "mail":D});

    console.log(A);
}

function myFunctionreset(){
    document.getElementById("donnees").reset();
}