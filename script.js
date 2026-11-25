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

