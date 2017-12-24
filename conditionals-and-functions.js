/*
 *Conditionals, Functions, Scope and Loops.
 */

/*

//Equals
equals = 1 === 1;
console.log(equals);

//Greater than
greaterThan = 5 > 1;

//Less than
lessThan = 2 < 10;

//Greater or equal to
greaterThanEq = 5 >= 5;

//Less Than Equals
lessThanEq = 4 <= 9;

//Not Equals
notEquals = 5 !== 2;

*/

/*

storeA = 1.40;
storeB = 3.40;

function compareStorePrices (storeA, storeB){
	storeAIsLower = storeA < storeB;

	if(storeAIsLower) {
		console.log("Store A has a lower price.")
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.")
	} else {
		console.log("Their prices are equal.")
	}
}

compareStorePrices(10,5);
//compareStorePrices(7,10);

function squareNum(number) {
	squared = number * number;
	return squared;
}

squaredNumber = squareNum(4);
console.log(squaredNumber);

*/

/*

x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	var b;
	if (1===1) {
		b = 8;
	}
	console.log(b);
	return n + m + x;
}

console.log(addNumbers(1,2,10));

*/

/*

//Index     0  1  2  3  4  5  6
ourArray = [1, 2, 3, 4, 5, 6, 7];

arrLen = ourArray.length;
for (i = 0; i < arrLen; i++){
	//console.log("i is equal to: " + i);
	console.log(ourArray[i]);

	for (j = 0; j < 10; j++) {
		console.log('j is equal to: ' + j);
	}
}

*/


x = 0;
while (x < 10) {
	console.log('Ran');
	x = x +1;
}

