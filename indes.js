let vardas = ("Lukas");
let pavarde = ('Profas');
let metai = ('1997-04-12')
console.log(vardas.toUpperCase());
console.log(pavarde.toLowerCase());
console.log(metai)
console.log(vardas.charAt(0),pavarde.charAt(0));
console.log(vardas.slice(-3),pavarde.slice(-3));
const text = ('Once upon a time in hollywood');
console.log(text.replace(/o/gi,'*'));
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('Once upon a time in hollywood', 'o') + char_count('Once upon a time in hollywood', 'O'));

function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365);
 }
 console.log(getAge('1997'));

 let hello = `Aš esu ${vardas} Man yra ${getAge('1997')} metai`
console.log(hello);

A = "*";
    a = A.repeat(400);
    document.write(a);