var A = 1;
if(A === 1){
    document.write(A + "<br>");
}
if(A !== 2){
    A++;
    document.write(A + "<br>");
}
var B = ["Kilic", "Aslan", "22ans", "Célibataire","Libre comme l'air"];

var C = [
    {
        nom:"aslan",
        prénom:"kilic",
        âge:"22"
    },
    {
        nom:"moulin",
        prénom:"jean",
        âge:"99"
    },
    {
        nom: "Jaiy-La",
        prénom: "Gastro",
        âge: "RIP"
    }
];

var D = 0;

/* for(var D = 0; D < B.length; D++){
    document.write(B[D] + "<br>");
} */

/* for(var D = 0; D < C.length; D++){
    document.write(C[D].nom + " " + C[D].prénom + " " + C[D].âge +"<br>");
} */

/* while(D < B.length){
    document.write(B[D] + "<br>");
    D++;
} */

while(D < C.length){
    document.write(C[D].nom + " " + C[D].prénom + " " + C[D].âge +"<br>");
    D++;
}

var NewN = prompt(" Tappez votre nom");
var NewP = prompt(" Tappez votre prénom");
var NewA = prompt(" Tappez votre âge");

C.push({"nom" : NewN,"prénom":NewP,"âge":NewA});
