// // // // // // console.log('Hello World');
// // // // // // console.log('welcome to class');
// // // // // // console.log('Hello World');
// // // // // // console.log('welcome to class');


// // // // // //JS VARAIBLES AND VALUES (var, let and const )
// // // // // // let x  = 2;
// // // // // // x = 9;
// // // // // // const y = 4;
// // // // // // console.log(x);
// // // // // // console.log(y);

// // // // // //Conventions and rules in naming var
// // // // // //have a logical name
// // // // // // const b = 'Mubarak' //instead
// // // // // // const firstName = 'Mubarak'
// // // // // //compound (2) names - camelcasing (first letter of first word starts with small letter, fisrt letter of second word in cap. Eg, firstName)
// // // // // //Illegal things we can't do 
// // // // // //you cant't start a variable with number. its either $ or _
// // // // // const $year = 2003
// // // // // //be careful with uppercase and lowercase. A/a are two diff things
// // // // // //Js have some reserved names you cant use.



// // // // // // const country = 'America';
// // // // // // console.log(country);


// // // // // // let state = 'lagos'
// // // // // // console.log(state);

// // // // // // state = 'Kano'
// // // // // // console.log(state);

// // // // // //JAVASCRIPT DATA TYPES - (Primitive, Complex)
// // // // // // PRIMITIVE
// // // // // //srtings -text- quotes- strings
// // // // // // const firstName = "Jhon";
// // // // // // const lastName = "Doe";
// // // // // // const middleName = "Owen";
// // // // // // const currentJob = "Product Manager";
// // // // // // const email = "zaynabnanee@gmail.com";
// // // // // //String Concatenation (joining of strings) we use + sign.
// // // // // // const fullName =firstName + " " + middleName + " " + lastName;
// // // // // // console.log(fullName);

// // // // // //my name is jhon and i work as a project manager
// // // // // // const description = "my name is " + firstName + " i works as a " + currentJob
// // // // // // console.log(description);

// // // // // //you can message me on this email
// // // // // // const message = "you can message me on this email," + " " + email;
// // // // // // console.log(message);

// // // // // //Getting characters -
// // // // // // console.log(firstName[3]);
// // // // // // console.log(currentJob[8]);

// // // // // //classwork
// // // // // // console.log(middleName[1]);

// // // // // // String length
// // // // // // console.log(firstName.length);
// // // // // // console.log(description.length);

// // // // // //strings methods
// // // // // // transform 
// // // // // //console.log(fullName.toUpperCase());
// // // // // //console.log(fullName.toLowerCase());

// // // // // // extracting parts of a string - slice, substring substr
// // // // // //const email2 = "zaynabnanee@gmail.com"
// // // // // //string.slice[0, 7]
// // // // // //console.log(email2.slice(0, 6));
// // // // // // console.log(email2.slice(12, 17));
// // // // // // console.log(email2.substring(0, 12));


// // // // // //subsrting (start, count of cters)
// // // // // //console.log(email2.substr(0, 12));


// // // // // //replace string content - replace, replaceAll
// // // // // // console.log(email2.replace("a", "$"));
// // // // // // console.log(email2.replaceAll("a", "$"));
// // // // // // console.log(email2.replace("zaynab", "Ruka"));

// // // // // //includes, indexOf, lastIndexOf, trim, concat, 
// // // // // //trimStart, trimEnd, startsWith, endsWith

// // // // // //includes ana amfani dashi wajan neman abu
// // // // // //console.log(email2.includes('#')); 

// // // // // //indexOf what is the position of a certain cter
// // // // // //console.log(email2.indexOf("a"));

// // // // // // lastIndexOf
// // // // // //console.log(email2.lastIndexOf("a"));

// // // // // //trim
// // // // // // const user = "      Mubarak     "
// // // // // // const password = "   57674567874   "
// // // // // // console.log(user.length, password.length);

// // // // // //const formattedUser = user.trim()

// // // // // //trim start
// // // // // // const formattedPassword = password.trimStart()
// // // // // // console.log(formattedUser.length);
// // // // // // console.log(formattedPassword.length);

// // // // // //starts with
// // // // // //console.log(email2.startsWith("z"));

// // // // // //ends with
// // // // // //console.log(email2.endsWith("m"));


// // // // // // concatination
// // // // // const job = "Frontend";
// // // // // console.log(job.concat (' ', 'Developer', ' ', 'is rare'));


// // // // // // template literals //
// // // // // // formating variables inside of strings. put bacticks, den formatt in your variables
// // // // // const author = "Chinua Achebe"
// // // // // const book = "Things fall Apart"
// // // // // const year1 = 1996;

// // // // // console.log("The book " + book + " was written by " + author + " in the year " + year1);

// // // // // //template
// // // // // const bookDescription = `The book ${book} was written by ${author} in the year ${year1}`
// // // // // console.log(bookDescription);

// // // // // //template
// // // // // const fav = `my favourite author is ${author}`
// // // // // console.log(fav);





// // // // // //numbers - 6.3 45000
// // // // // // math operators - + * / **(rasise to d power) % (returns the remainder of a division)
// // // // // // order of operations bedmas
// // // // // let balance = 500;
// // // // // const t1 = 20;
// // // // // const t2 = 100;
// // // // // const d1 = 200;


// // // // // // console.log(5 + 6 * 2 - 3); //5 + 12 - 3 // 17 - 3 =14

// // // // // // let total = 50;
// // // // // // //increase the value  of total by 10
// // // // // //   //shortcut kuma
// // // // // //  total += 10;
// // // // // // console.log(total);


// // // // // // let likes = 0
// // // // // // likes += 1;
// // // // // // likes += 1;
// // // // // // likes += 1;
// // // // // // likes -= 1;
// // // // // // likes ++;
// // // // // // likes --;
// // // // // // console.log(likes);


// // // // // // let post = 40
// // // // // // post += 15
// // // // // // post -= 15
// // // // // // console.log(post);


// // // // // //NaN Not a number
// // // // // console.log('4 - hello');
// // // // // console.log(3 ** 'hello');
// // // // // console.log(6 + 'zee');

// // // // // // Boolean - true and false 
// // // // // //used to execute commad



// // // // // const country =  'Nigeria';
// // // // // const continent = 'Africa';
// // // // // let population = 100000;
// // // // // console.log(country, continent, population);

// // // // // const isIsland = 'false';
// // // // // const language = 'English';


// // // // // // population -=50000;
// // // // // // console.log(population);

// // // // // population /=2;
// // // // // console.log(population);

// // // // // population ++
// // // // // console.log(population);

// // // // // //template literals
// // // // // //Nigeria is in african and its population of 67655687 people speak in french

// // // // // const description1 = `${country} is in ${continent} and its population of ${population} speaks in ${language}`
// // // // // console.log(description1);


// // // // // const description3 = `${country} as a country speaks ${language}`
// // // // // console.log(description3);


// // // // // //boolean - true or false
// // // // // //comparism operators- <> <= == ===
// // // // // // = assignment thats assigning values to variable
// // // // // // == loose equality doest care about data type
// // // // // // === strict equality is strict about data type
// // // // // console.log(6 < 3);
// // // // // console.log(5 >= 5.0);
// // // // // console.log(4 == 4);


// // // // // //Logical operators. we have 3 (and&&, or||, not!)
// // // // // console.log(5 > 6 && 2 == 2);
// // // // // console.log(6 > 7 || 2 === 2);
// // // // // console.log(5 != 5); 

// // // // // // type of function (typeof) data types

// // // // // //type conversion and type coercion
// // // // // //strings to number
// // // // // const str = "90";
// // // // // console.log(typeof str);
// // // // // const converted = Number(str);
// // // // // console.log(typeof converted);

// // // // // //numbers to string
// // // // // const num = 6875767
// // // // // console.log(typeof num);
// // // // // const converted2 = String(num)
// // // // // console.log(typeof converted2);

// // // // // //type of corecion
// // // // // const num1 = 8;
// // // // // const num2 = "2"

// // // // // console.log(num1 + num2);

// // // // // const res = num1 - num2
// // // // // console.log(res);
 

// // // // // //null - null
// // // // // let age = null
// // // // // console.log(age, age + 4, `my age is ${age}`);

// // // // // //undefined -undefined (no value)
// // // // // let year;
// // // // // console.log(year);
// // // // // console.log(year, year + 4, `my age is ${year}`);

// // // // // //truthy
// // // // // console.log(Boolean(" "));
// // // // // //falsy values 0, null, undefined


// // // // // //control flow
// // // // // // condition statement
// // // // // //if (condition){code}
// // // // // const password4 = '2689045679';
// // // // // if (password4.length > 6) {
// // // // //     console.log("your password is strong");
// // // // // }

// // // // // if (false) {
// // // // //     console.log("working");
    
// // // // // }

// // // // // //if else
// // // // // //if {condition} 
// // // // // //{code1}
// // // // // //else
// // // // // //{code 2}


// // // // // if (password4.length > 6) {
// // // // //     console.log("Your password is strong");
    
// // // // // } else{
// // // // //     console.log("Your password is weak");
// // // // // }

// // // // const country = "Germany";
// // // // const continent = "Europe";
// // // // const population = 30;
// // // // const isIsland = false;
// // // // const language = "English"

// // // // //Sarah speaks english has less than 50 people and is not an island
// // // // //You should live in Portugal
// // // // //Portugal does not meet your criteria

// // // // if (language === "English" && population < 50 && !isIsland) {
// // // //     console.log(`You should live in ${country}`);
    
// // // // } else {
// // // //     console.log(`${country} does not meet your criteria`);
// // // // }

// // // // const age =18;

// // // // // >=18

// // // // if (age >=18) {
// // // //     console.log("you are an adult");
    
// // // // } else{
// // // //     console.log("you are not one");
// // // // }

// // // // //if (condition)else if (another condition)else{} else
// // // // const password = "4666576569@"
// // // // //recommemded >7 and include @, strong >7 and weak

// // // // if (password.length >= 7 && password.includes('@')) {
// // // //     console.log('Your password is recommended');
// // // // } else if (password.length >7) {
// // // // console.log('Your password is strong');
// // // // } else{
// // // //     console.log('Your password is weak');
// // // // }


// // // // //whether a number is positive, negative or zero
// // // // const num5 = 56

// // // // if (num5 > 0) {
// // // //     console.log('positive');
// // // // } else if (num5 < 0) {
// // // // console.log('negative');
// // // // } else {
// // // //     console.log('zero')

// // // // }

// // // // //whether a number is even or odd
// // // // const num2 = 23

// // // // if (num2 % 2 === 0) {
// // // //     console.log('This is Even');

// // // // } else {
// // // //     console.log('This is ODD');
// // // // }


// // // // //< 18 CHILDREN SECTION, BETWEEN 18 & 50 GO INTO THE CLUB, VIP
// // // // const people = 50

// // // //  if (people < 18) {
// // // //     console.log('Welcome to baby section');
// // // //  }
// // // // else if (people <= 50) {
// // // //     console.log('welcome to adult section');
// // // // } else{
// // // //     console.log('Welcome to VIP section');
// // // // }



// // // //SWITCH STATEMENT
// // // const day = 6;
// // // switch (day) {
// // //     case 1:
// // //         console.log('MONDAY');
// // //         break;
// // //         case 2:
// // //         console.log('TUESDAY');
// // //         break;
// // //         case 3:
// // //         console.log('WEDNESDAY');
// // //         break;
// // //         case 4:
// // //         console.log('THURSDAY');
// // //         break;
// // //         case 5:
// // //         console.log('FRIDAY');
// // //         break;
// // //         case 6:
// // //         console.log('SATURDAY');
// // //         break;
// // //         case 7:
// // //         console.log('SUNDAY');
// // //         break;

// // //     default:
// // //         console.log('NOT A VALID DAY');
// // //         break;
// // // }

// // // const grade = 'C'
// // // switch (grade) {
// // //     case 'A':
// // //         case 'a':
// // //         console.log('EXCELLENT');
// // //         break;
// // //         case 'B':
// // //         case 'b':
// // //         console.log('VERY GOOD');
// // //         break;
// // //         case 'C':
// // //         case 'c':
// // //         console.log('GOOD');
// // //         break;
// // //         case 'D':
// // //         case 'd':
// // //         console.log('FAIR');
// // //         break;
// // //         case 'E':
// // //         case 'e':
// // //         console.log('POOR');
// // //         break;
// // //         case 'F':
// // //         case 'f':
// // //         console.log('FAIL');

// // //     default:
// // //         console.log('NOT A VALID GRADE');
// // //         break;
// // // }
// // //bedmas

// // // const markWeight = 78
// // // const markHeight = 1.69
// // // const markBmi = markWeight / markHeight * 2
// // // console.log(markBmi);

// // //Code challenge 1
// // let markWeight = 78
// // markWeight = 95
// // let markHeight = 1.69
// // markHeight = 1.88
// // let markBmi = markWeight / markHeight ** 2
// // console.log(markBmi);


// // let jhonWeight = 92
// // jhonWeight = 85
// // let jhonHeight = 1.96
// // jhonHeight = 1.76
// // let jhonBmi = jhonWeight / jhonHeight ** 2
// // console.log(jhonBmi);
// //  const markHigherBmi = markBmi > jhonBmi
// //  console.log(markHigherBmi);

// //  //code challenge 2
// //  const higherBMI = 'Marks BMI is higher than Jhons' 
// //  console.log(higherBMI);

// //  if (markBmi > jhonBmi) {
// //     console.log(`Mark BMI of ${markBmi} is higher than jhons ${jhonBmi}`);
// //  } else {
// //     console.log(false);
// //  }

// // //Code challenge 3
// // //bedmas
// // // Dolphins score 96 + 108 + 89 / 3
// // // kaolas score 88 + 91 + 110 / 3
// //  const dolpavg = (96 + 108 + 89) / 3
// //  const kaoavg = (88 + 91 + 110) / 3
// // console.log(dolpavg);
// // console.log(kaoavg);



// // if (dolpavg > kaoavg) {
// //     console.log('Dolphin team is the Winner');
    
// // } else if (dolpavg < kaoavg) {
// //     console.log('Kaola Team is the  Winner');
// // }
// // else if (dolpavg == kaoavg) {
// //     console.log('Draw Match');
// // }



// // //tofixed
// // //its used to round up decimal numbers. but it turns number to a string
// // // const lamba = 44.8654467808
// // // console.log(lamba);
// // // console.log(lamba.toFixed(2));



// // //ternary operators (mordern way of writinf 'if else' statements)
// // if(condition){code 1} else{code 2} THIS IS IF ELSE
// // condition ? action 1 : action 2
//  const num2 = 46;
//  num2 % 2 === 0
//  ? console.log("This is an EVEN number")
//  : console.log("This is an ODD number");


// // //LOOPS - repititive tasks -for, while, do, do.. while loop
// // for (initializer let i = 0; condition i < 5; increment i++ ){code}
// for (let i = 0; i < 10; i++){
//     console.log('In the loop ${i}') ;
// }
// console.log("outside of the loop");

// //sum of
// let sum = 0
// for (i = 0; i <= 5; i++){
//     sum += i
// }
// console.log(sum);

// //while loop
// //initializer
// //while (condition){code increment}
// let x = 0
// while (x < 20) {
//     console.log('HELLO');
//     x++;
// }

// let y = 50;
// do {
//     console.log("HEY");
//     y++
// } while (y < 5);

// //WHAT WE HAVE COVERED
// //Variables and values
// //primitive data types - strings, strings method
// //number, math operators, logical, comparison
// //booleans - truthy and falsy val
// //null and undefined
// //conditional statements
// // loops


// //wannan satin
// // //functions (block of codes design to perfome particular tasks). We have 3 ways of declaring functions
// // 1. function declaration
function myFunction() {
    console.log('HELLO CLASS');
    console.log('WE AR HAPPY TO SEE YOU');
    
}
myFunction();

//example 2
function greet(name = 'user', age = 18,) {
    console.log('WELCOME ' + name + age );
    
} greet('Zainab ', 43);
greet ('Funsho ', 23);
greet ();

// Calculate the age of users
//2023 - year
function CalcAge(year) {
    const age = 2023 - year;
   console.log(`Your age is ${year}`);
    CalcAge (1992)
    CalcAge (2001)

}

function sumNum(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

sumNum(2, 7)
sumNum(3, 7)


function describeCountry (country, population, capitalCity) {
    console.log(`${country} has ${population} and its capital city is ${capitalCity}`);
}

describeCountry ('Nigeria', '7 million', 'Abuja')
describeCountry ('Ghana', '8 million', 'Accra')
describeCountry ('Egypt', '9 million', 'Cairo')



function checkEmail (email) {
    if (email.includes('@')) {
        console.log(`${email} is a valid email`);
        
    } else {
        console.log(`${email} is a not valid email`);
    }
}
checkEmail ('muhammadanani@gmail.com')


//function expression
const myFunction2 = function (a, b) {
    console.log(a + b);
}
myFunction2 (2, 7)

//return keyword
const precious = function (a, b) {
    return a * b;
};
const test = precious(10, 10)
console.log(test);

const calAverage = function (a, b, c) {
    const avg = (a + b + c) / 3;
    return avg.toFixed(2);
    return Number(avg.toFixed(2));
}

const avgDolphin = calAverage(123, 98, 89);
const avgKaola2 = calAverage(110, 87, 95);
console.log(avgDolphin, avgKaola2);


function checkWinner(teamA, teamB) {
    if (teamA > teamB) {
        console.log('First team won');
        
    } else if (teamB > teamA) {
        console.log('Second team won');
        
} else {
    console.log('NO winner');
}
}

checkWinner (avgDolphin, avgKaola2)


// // //arrays
// // //object
// // //asybchronous js
// // // DOM