/* var a, b, c, d, e;
a = 1;
b = 1.5;
c = true;
d = "false";
e = [1,2,3,4,5];

console.log(a,b,c,d,e)
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));

var f = b.toString();
console.log(typeof(f));

//const sert à déclarer une constante qui sera accessible uniquement en lecture. Ici elle à une porté global c'est à dire que je peux l'appeler n'import où dans mon script elle aura toujours la même valeur
const G = "Constante";

let G = 12; //Renvoi une erreur car la constante G est déjà défini dans le contexte global

//début condition
if (G === "Constante"){ //début bloc local
    let G = 20;
    console.log(G);
} //fin bloc local 

console.log(G);

var yy = 1.005;
console.log(typeof(yy));
 */
// = affecter une valeur
// == comparer que 2 valeurs sont identiques (ex: 7 et "7" {vrai})
// === vérifier que 2 valeurs sont idenques et du même type (ex: 7 et "7" {faux})
// < inferieur
// > supérieur
// != vérifier que les 2 valeurs sont inégales
// !== vérifier que les 2 valeurs et les types sont inégales
// <= inférieur ou égal
// >= supérieur ou égal
const H = "Kilic"
if (H) {

}

var A, B, C;
C = 1;
A = "Bien joué";
B = "Non le résultant était:"
var result = parseInt(prompt("1 + 1 = ?"));
if (result == 2) {
    console.log(C);
    console.log(typeof(result));
    console.log(result);
    alert(A);
    var result = parseInt(prompt("2 + 2 = ?"));
    if (result == 4){
        console.log(typeof(result));
        console.log(result);
        alert(A);
        var result = parseInt(prompt("6 + 10 = ?"));
        if (result == 16){
            console.log(typeof(result));
            console.log(result);
            alert(A);
            var result = parseInt(prompt("6 * 6 = ?"));
            if (result == 36){
                console.log(typeof(result));
                console.log(result);
                alert(A);
                var result = parseInt(prompt("45 / 5 = ?"));
                if (result == 9){
                    console.log(typeof(result));
                    console.log(result);
                    alert(A);
                    var result = parseInt(prompt("(45 / 5  * 9 + 9) / 9 +10 = ?"));
                    if (result == 20){
                        console.log(typeof(result));
                        console.log(result);
                        alert(A);
                    }else {C = 2, "20"};
                }else{ C = 2, "9" };
            }else{ C = 2, "36" };
        }else{ C = 2, "16" };
    }else{ C = 2, "4" };
}else{ C = 2, "2" };


if (C == 2){
    alert(B);
}
if (C == 1){
    alert("fini");
}

