let x = '4'

console.log(x > 6)
console.log(x < 6)
console.log(x === 5)
console.log(x !== 5)
console.log(x == 4)

console.log(1 == '1')
console.log(1 === '1')

let points = 110;
let type = points > 100 ?  'gold' : 'silver';
console.log(type);

console.log(true && true);
console.log(true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused' , applicationRefused);

// 1 = 00000001
// 2 = 00000010
// R = 00000011

console.log(1 | 2);
console.log(1 & 1);
console.log(1 & 2);

// Read , write , Execute\
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);

let v = (2 + 4) * 8;
console.log(v);

let m = 'blue';
let n = 'pink';
let b = m;
m = n;
n = b;

console.log(m);
console.log(n);

let myPriority = 0;

console.log(myPriority); 











 







