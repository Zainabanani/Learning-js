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

console.log("The book" + " " + book + " " + "was written by" + " " + author + " " + "in the year" + " " + year1);

//template
const bookDescription = `The book ${book} was written by ${author} in the year ${year1}`
console.log(bookDescription);

//template
const fav = `my favourite author is ${author}`
console.log(fav);







//numbers - 6.3 45000
const year = 2003
//boolean - true and false
//null - null
//undefined -undefined (no value)
