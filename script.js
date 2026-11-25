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