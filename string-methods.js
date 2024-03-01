
/!-----slice() ------/

const fullName = "Jacob Mercer";
console.log(fullName.slice(0,4)); //"Jaco"
console.log(fullName.slice(3, 9)); //"ob Mer"

console.log(fullName.slice(2)); //"cob Mercer"

console.log(fullName.slice()); //"Jacob Mercer"


const fullName = "Jacob Mercer";
const firstName = fullName.slice(0, 5);
const lastName = fullName.slice (6);
console.log(fullName); //"Jacob Mercer"
console.log(firstName); //"Jacob"
console.log(lastName); //"Mercer"

function getSubstring(string, length) {
    return string.slice(0, length);
}



/!-----toLowerCase(), toUpperCase() ------/

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); //"welcome to the bahamas"
console.log(message.toUpperCase()); //"WELCOME TO THE BAHAMAS"
console.log(message); //"Welcome to the Bahamas"


const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();
console.log(brandName); //'samsung'
console.log(userInput); //'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); //true


function normalizeInput(input, to) {
    if(to === "upper") {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}



/!----------- includes() -----------/

const username = 'Jacob Mercer';
console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('mercer')) // false

const message = 'Please buy our stuff';
const hasSpam = message.includes('buy');
if (hasSpam) {
    console.log('Warning: This message contains forbidden words.');
} else {
    console.log('You can safely open this message.');
}



function checkForName(fullName, firstName) {
    const fullNameLower = fullName.toLowerCase();
    const firstNameLower = firstName.toLowerCase();
    return fullNameLower.includes(firstNameLower);
}


/!----------- startsWith(), endsWith() -----------/


const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false


function checkFileExtension(fileName, ext) {
    const endsWithExt = fileName.toLowerCase().endsWith(ext.toLowerCase());
        if(endsWithExt) {
        return "File extension matches";
        } else {
        return "File extension does not match";
        }
    }



/!----------- indexOf() -----------/

const message = "Welcome to Bahamas!";
const index = message.indexOf("to");
console.log(index); // 8

const index = message.indexOf("hello");
console.log(index); // -1


function getFileName(file) {
    const dotIndex = file.lastIndexOf(".");
    if(dotIndex === -1) {
        return file;
    } else {
        return file.slice(0, dotIndex);
    }
    }


/!----------- trim() -----------/


const input = "  JavaScript is awesome     ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome"

function createFileName(name, ext) {
    const trimmedName = name.trim();
    const fileName = `${trimmedName}.${ext}`;
    return fileName;
}