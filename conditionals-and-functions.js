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

storeA = 1.40;
storeB = 3.40;

storeAIsLower = storeA < storeB;

if (storeAIsLower) {
	console.log("Store A has a lower price.")
} else if (storeB < storeA) {
	console.log("Store B has a lower price.")
} else {
	console.log("Their prices are equal.")
}

