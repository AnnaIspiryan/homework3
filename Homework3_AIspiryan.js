const setOfOperation =  functuion (a, b, c) {
d= a*(b+c);
return d;
}


const noArguments = function () {
return 6;
}


const myFunction = function (a, b) {
a+b;
}

 
const longestString= function ( a, b, c ) {
if (a.length > b.length & a.length > c.length) {
return a;
 }
else if (b.length > a.length & b.length > c.length) {
return b;
    }
else {
return c; 
 }
}



const numCompare = function (num1, num2) {
if (num1===num2) {
return 0;
}
else if (num1 > num2) {
return 1;
}
else {
return -1;
}
}


const multiply = function (arg1, arg 2 ) {
arg3 = arg1*arg2;
return arg3;
}


const devision = function (num1, num2 ) {
num3 = num1/num2;
return num3;
}


const triangleArea = function(base, height) {
area= devision ( multiply (base, height), 2);
return area;
};


const numLength = function (num) {
const n= num.toString();
return n.length;
}



const compareLength = function (str1, str2, num) {
if (str1.length+ str2.length > num) {
return 1;
}
else {
return -1;
}
}



const runStuff = function (num1, num2, str) {
if (str=== "'triangle'") {
area= (num1*num2)/2;
return area;
}
if ( str === "rectangle") {
area = num1*num2;
return area;
}
else { return -1;
}
}

