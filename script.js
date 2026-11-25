/*här försöker jag logga något som inte skapats vilket ger referensfel
console.log(halsning);
console.log(alder);
console.log("jag heter " + namn + " och är " + alder + " år.");*/

{
    const namn = "Arne";
    let alder = 50;
    var halsning = "Hej! vad heter du?";
//vi ser om variablerna fungerar i konsolen
    console.log(halsning);
 
    console.log("jag heter " + namn + " och är " + alder + " år.");
}
/*console.log(halsning);
console.log(alder);
console.log("jag heter " + namn + " och är " + alder + " år.");

eftersom blocket är nästlat går det inte att komma åt blocket utanför blocket (bara var) vilket ger referensfel.
let och const har block scope, de existerar bara i sina block, var har inte block scope och läcker ut utanför blocket.

*/

//uppgift 3
const addArrow = (num1, num2) => num1 + num2;
console.log(add(2,4));

/*reflexion uppgift 3:
3.1: om let används kan variabeln add skrivas över men med const skyddas variabelns värde.



function add2 (num1, num2) {
    return num1 + num2;
}
console.log(add2(2, 8));

Resultates av beräkning skickas tillbaka med en return statement 
 */

//uppgift 4

// 2-5
function add (num1, num2) {
  console.log(num1 == 0);
  console.log(num2 == '0');
  console.log(num2 === 0);
  console.log(num1 == NaN);
  
  //6: num1 utvärderas med terniary operator (truthy eller falsy)
  console.log(num1 ? "truthy" : "falsy");
  // 7-8
    if (num1 !== null && num1 !== undefined && typeof num1 === 'number' && !isNaN(num1) &&
        num2 !== null && num2 !== undefined && typeof num2 === 'number' && !isNaN(num2)){
        return num1 + num2;
    } else{
        return "fel input";
    }
}

/*Reflexion uppgift 4
1:  En terniary operator är ett enkelt och mer kompakt sätt att skriva en if-else sats.
    Den utvärderar ett villkor och returnerar ett av två värden beroende på om villkoret är sant eller faltskt.
2:  == lös jämförelsr.
    === strikt jämförelse, både värdet och datatypen måste vara exakt lika.
3:  Genom att använda strikta olikhetskontroller med den logiska operatorn &&. 
    Detta gör att variabeln varken är null eller undefined innan koden i if-satsen körs.
 */

//Uppgift 5:

const num1 = 0;
let arg1;
let sum = false;

console.log("test 1");
sum = add(sum, 1);
console.log(sum);

console.log("test 2");
console.log(add("0",3));

console.log("test 3");
console.log(add(3,"num1"));

console.log("test 4");
console.log(add(-5, num1));

console.log("test 5");
console.log(add(arg1,7));

console.log("test 6");
console.log(add());

console.log("extra tester");
console.log(add(-10, num1));

console.log("slutgiltiga värdet för num1", num1);
console.log("slutgiltiga värde för sum", sum);

/* Reflexion uppgift 5:
1:  Variabel: Variabel är en namngiven behållare som lagrar data i koden t.ex. const num1 = 0;
    Parameter: Platshållaren i funktionsdefinitionen som tar emote ett värde tex function add(num1,num2))    
    Argument: Det faktiska värde eller variabeln som skickas in vid funktionsanropet t.ex. add(-5, num1))
2: Värdet förblir 0. Funktionens parameter num1 existerar bara i funktionens lokala scope och skuggar den yttre konstanten alltså const num1 = 0 som i sin tur gör den yttre variabeln opåverkad av funktionsanropen.


3:  Parametrar: num1 får värdet -5 och num2 får värdet 0 från den yttre konstanten-
    Villkoren utvärderas och loggar true eller false i konsolen.    
    Ternary operator: -5 utvärderas som truthy som i sin tur loggar truthy i consolen.
    if-satsen kontrollerar att båda värdena är giltiga siffror alltså inte null, undefined eller NaN.
    Returnvärde: Beräkningen -5 + 0 utförs ich funktionen returnerar -5
 */

