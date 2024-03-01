/!----------- while -----------/

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
}



/!----------- do...while -----------/

let count = 0;

do {
	console.log(`Count: ${count}`);
	count += 1;
} while (count < 5);


/!----------- for -----------/

for (let i = 0; i <= 20; i += 5) {
    console.log(i);
}

for (let i = 20; i >= 0; i -= 5) {
    console.log(i);
}



/!----------- increment, decrement -----------/

let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

let x = 5;
const y = x++;
console.log(x); // 6
console.log(y); // 5




let x = 5;
const y = --x;
console.log(x); // 4
console.log(y); // 4

let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5


/!----------- break -----------/




for (let i = 0; i < 10; i+=1) {
    console.log(i);

    if (i === 5) {
        console.log('Met the number 5, interrupt the execution of the cycle');
        break;
    }
}

console.log('Log after cycle');