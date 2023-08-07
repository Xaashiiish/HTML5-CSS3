
let hour = 11;

if (hour >= 6 && hour < 12)
    console.log('Good Morning');
else  if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else 
    console.log('Good evening');

//switch case

let role;
switch (role) {
    case 'guest':
    console.log('guest user');
    break;

    case 'moderator':
    console.log('moderator user');
    break;

    default:
        console.log('unknown user');
}


if ( role === 'guest') console.log('Guest user');
else if (role === 'moderator') console.log('Moderate user');
else console.log('unknown user');

for ( let i = 0; i < 5; i++){
 console.log('Hey khushi' , i)
}
for ( let k = 0; k < 15; k++){
    if (k % 2  !== 0) console.log(k)
   }

for ( let b = 0; b < 15; b++){
    if (b % 2  === 0) console.log(b)
}
let k = 0;
while (k <= 5){
    if (k % 2  !== 0) console.log(k);
    k++;
}

let  x = 0;
do {
    if (x % 2  !== 0) console.log(x);
    x++;
}while (x <= 5);

let i = 0;
while (i < 5) {
    console.log(i); i++
}

const person = {
    name: 'XYLO',
    age: 18
};
for (let key in person)
     console.log(key , person[key]);

const colors = ['red' , 'pulple' , 'bhellow'];     
for (let index in colors)
 console.log( index, colors[index]);  

for (let color of colors)
  console.log(color);

let m = 0;
while (m <= 10){
  //  if (m === 5) break;
    if (m % 2 === 0)
    console.log(m);
    m++; continue;
}
  
let number = max (5 , 2);
console.log(number);

function max(a , b){
    return (a > b) ? a : b;
}

console.log(isLandscape(800, 600));
function isLandscape(width , height) {
   return (width > height);
}

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) { 
     if (typeof input !== 'number')
     return 'not a number';

     if (input % 3 === 0)
     return 'fizz';

     if (input % 5 === 0)
     return 'buzz';

     if (input % 3 === 0 && input % 5 === 0 )
}




