//step one 

var fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();
console.log(fruits);

//step two

fruits.sort();
console.log(fruits);

//step three


fruits.push("Kiwi");
console.log(fruits);

//step four

fruits.splice(0, 1);
console.log(fruits);

//step five

fruits.reverse();
console.log(fruits);


//new array

var array2 = ["Banana", 
					["Apples", 
						["Oranges"], 
					"Blueberries"
					]

				];


//access "oranges" .... really tough tbh
console.log(array2[1][1][0]);




//OBJECTS

let account = {
	username:"Jacob",
	password:"chungus"
}

var database = {account};


//creating objects ...


var obj1 = {
	username:"Bob",
	timeline:"Jan 20, 2020"
}
var obj2 = {
	username:"Sam",
	timeline:"Jan 20, 2020"
}
var obj3 = {
	username:"Alexa",
	timeline:"Jan 20, 2020"
}

var newsfeed = {
	obj1,
	obj2,
	obj3

}

console.log(newsfeed);
