// console.log('Hello World');
// console.log('welcome to class');
// console.log('Hello World');
// console.log('welcome to class');


//JS VARAIBLES AND VALUES (var, let and const )
// let x  = 2;
// x = 9;
// const y = 4;
// console.log(x);
// console.log(y);

//Conventions and rules in naming var
//have a logical name
// const b = 'Mubarak' //instead
// const firstName = 'Mubarak'
//compound (2) names - camelcasing (first letter of first word starts with small letter, fisrt letter of second word in cap. Eg, firstName)
//Illegal things we can't do 
//you cant't start a variable with number. its either $ or _
const $year = 2003
//be careful with uppercase and lowercase. A/a are two diff things
//Js have some reserved names you cant use.



// const country = 'America';
// console.log(country);


// let state = 'lagos'
// console.log(state);

// state = 'Kano'
// console.log(state);

//JAVASCRIPT DATA TYPES - (Primitive, Complex)
// PRIMITIVE
//srtings -text- quotes- strings
const firstName = "Jhon";
const lastName = "Doe";
const middleName = "Owen";
const currentJob = "Product Manager";
const email = "zaynabnanee@gmail.com";
//String Concatenation (joining of strings) we use + sign.
const fullName =firstName + " " + middleName + " " + lastName;
console.log(fullName);

//my name is jhon and i work as a project manager
const description = "my name is " + firstName + " i works as a " + currentJob
console.log(description);

//you can message me on this email
const message = "you can message me on this email," + " " + email;
console.log(message);

//Getting characters -
console.log(firstName[3]);
console.log(currentJob[8]);

//classwork
console.log(middleName[1]);

// String length
console.log(firstName.length);
console.log(description.length);

//strings methods
// transform 
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// extracting parts of a string - slice, substring substr
const email2 = "zaynabnanee@gmail.com"
//string.slice[0, 7]
console.log(email2.slice(0, 6));
console.log(email2.slice(12, 17));
console.log(email2.substring(0, 12));


//subsrting (start, count of cters)
console.log(email2.substr(0, 12));


//replace string content - replace, replaceAll
console.log(email2.replace("a", "$"));
console.log(email2.replaceAll("a", "$"));
console.log(email2.replace("zaynab", "Ruka"));

//includes, indexOf, lastIndexOf, trim, concat, 
//trimStart, trimEnd, startsWith, endsWith

//includes ana amfani dashi wajan neman abu
console.log(email2.includes('#')); 

//indexOf what is the position of a certain cter
console.log(email2.indexOf("a"));

// lastIndexOf
console.log(email2.lastIndexOf("a"));

//trim
const user = "      Mubarak     "
const password = "   57674567874   "
console.log(user.length, password.length);

const formattedUser = user.trim()

//trim start
const formattedPassword = password.trimStart()
console.log(formattedUser.length);
console.log(formattedPassword.length);

//starts with
console.log(email2.startsWith("z"));

//ends with
console.log(email2.endsWith("m"));


// concatination
const job = "Frontend";
console.log(job.concat (' ', 'Developer', ' ', 'is rare'));


// template literals //
// formating variables inside of strings. put bacticks, den formatt in your variables
const author = "Chinua Achebe"
const book = "Things fall Apart"
const year1 = 1996;

console.log("The book " + book + " was written by " + author + " in the year " + year1);

//template
const bookDescription = `The book ${book} was written by ${author} in the year ${year1}`
console.log(bookDescription);

//template
const fav = `my favourite author is ${author}`
console.log(fav);





//numbers - 6.3 45000
// math operators - + * / **(rasise to d power) %(returns the remainder of a division)
// order of operations bedmas
let balance = 500;
const t1 = 20;
const t2 = 100;
const d1 = 200;


// console.log(5 + 6 * 2 - 3); //5 + 12 - 3 // 17 - 3 =14

// let total = 50;
// //increase the value  of total by 10
//   //shortcut kuma
//  total += 10;
// console.log(total);


// let likes = 0
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes ++;
// likes --;
// console.log(likes);


// let post = 40
// post += 15
// post -= 15
// console.log(post);


//NaN Not a number
console.log('4 - hello');
console.log(3 ** 'hello');
console.log(6 + 'zee');

// Boolean - true and false 
//used to execute commad



const country =  'Nigeria';
const continent = 'Africa';
let population = 100000;
console.log(country, continent, population);

const isIsland = 'false';
const language = 'English';


// population -=50000;
// console.log(population);

population /=2;
console.log(population);

population ++
console.log(population);

//template literals
//Nigeria is in african and its population of 67655687 people speak in french

const description1 = `${country} is in ${continent} and its population of ${population} speaks in ${language}`
console.log(description1);


const description3 = `${country} as a country speaks ${language}`
console.log(description3);


//boolean - true or false
//comparism operators- <> <= == ===
// = assignment thats assigning values to variable
// == loose equality doest care about data type
// === strict equality is strict about data type
console.log(6 < 3);
console.log(5 >= 5.0);
console.log(4 == 4);


//Logical operators. we have 3 (and&&, or||, not!)
console.log(5 > 6 && 2 == 2);
console.log(6 > 7 || 2 === 2);
console.log(5 != 5); 

// type of function (typeof) data types

//type conversion and type coercion
//strings to number
const str = "90";
console.log(typeof str);
const converted = Number(str);
console.log(typeof converted);

//numbers to string
const num = 6875767
console.log(typeof num);
const converted2 = String(num)
console.log(typeof converted2);

//type of corecion
const num1 = 8;
const num2 = "2"

console.log(num1 + num2);

const res = num1 - num2
console.log(res);
 

//null - null
//undefined -undefined (no value)


// const boyFriend = "Adam"
// const girlFriend = "Zeebaby"

// console.log(boyFriend);
// console.log(girlFriend);

// const bayani = `my boyfriend name is ${boyFriend}`
// console.log(bayani);

// console.log(boyFriend.toUpperCase ());
// console.log(girlFriend.toLowerCase ());

// console.log(boyFriend.includes('m'));
// console.log(boyFriend.includes('s'));

// console.log(boyFriend.startsWith('A'));
// console.log(girlFriend.endsWith('y'));

// console.log(boyFriend.indexOf('m'));
// console.log(girlFriend.indexOf('y'));

// console.log(girlFriend.slice(3, 5));

// console.log(girlFriend.replaceAll('e', 'u'));


// const username2 = '     Hadiza'
// const password2 = '      23454r6454   '
// console.log(username2);
// console.log(password2);

// console.log(username2.length);
// console.log(password2.length);

// console.log(username2.trim());
// console.log(password2.trimEnd());
// console.log(password2.trim());

// console.log(password2.length);