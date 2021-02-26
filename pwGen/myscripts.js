



var ichWillSonderzeichen=false;
var ichWillGroßbuchstaben=false;
var ichWillKleinbuchstaben=true;
var ichWillZahlen=false;
var PwaLaenge=10;


/**
 * generates Array with Asci decimals that should be use for password
 */
function generateRange(){
var range=[];

//ASCII Numbers
//32-47 58-64 91-96 123-126  Sonderzeichen
//48-57 Zahlen
//65-90 Großbuchstaben
//97-122 Kleinbuchstaben


if(ichWillSonderzeichen==true){

for (let index = 32; index < 48; index++) {
  range.push(index)
}

for (let index = 58; index < 65; index++) {
    range.push(index)
  }
  for (let index = 91; index < 97; index++) {
    range.push(index)
  }
  for (let index = 123; index < 127; index++) {
    range.push(index)
  }
}

if(ichWillGroßbuchstaben){
    for (let index = 65; index < 91; index++) {
        range.push(index)
      }
}

if(ichWillKleinbuchstaben){
    for (let index = 97; index < 123; index++) {
        range.push(index)
      }
}


if(ichWillZahlen){
    for (let index = 48; index < 58; index++) {
        range.push(index)
      }
}

return range

}

/**
 * generates string wich contains all characters used in password
 */
function gerateCharacterString(){

var range=generateRange();
var CharacterString="";

for (let index = 0; index < range.length; index++) {
    const element = range[index];
    
    CharacterString += String.fromCharCode( element );

}

   
return CharacterString


}
/**
 * generate Password
 */
function generatePassword(){

    var result           = '';
    var characters       = gerateCharacterString();
console.log(characters)
    var charactersLength = characters.length;
    for ( var i = 0; i < PwaLaenge; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

console.log(result)

}


function checkSonderzeichen(){

  var checkBox = document.getElementById("checkSonderzeichen");

  if (checkBox.checked == true){
    ichWillSonderzeichen=true
    console.log(ichWillSonderzeichen)
  } else {
    ichWillSonderzeichen=false
    console.log(ichWillSonderzeichen)
  }


}



generateRange()
gerateCharacterString()
generatePassword()