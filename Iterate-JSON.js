
let obj = [{

    fname: 'Mathan',
    Lname: 'kumar',
    age: 22,
    city: 'chennai',
    ph: 7550374687,
    gender: 'male',
    isStudent: true
},

{
    fname: 'mohan',
    Lname: 'kumar',
    age: 22,
    city: 'bombay',
    ph: 7550374687,
    gender: 'male',
    isStudent: false
},

{
    fname: 'vijay',
    Lname: 'kumar',
    age: 22,
    city: 'pune',
    ph: 7550374687,
    gender: 'male',
    isStudent: false
}];

let jsonobj = JSON.stringify(obj);
// console.log(jsonobj);
let obj1 = JSON.parse(jsonobj);
// console.log(obj1);

             // iterate the json using for of loop

// for (let value of obj1) {
//     console.log(value.fname);
// };

              // iterate the json using for in loop 

// for (let i in obj1) {
//     console.log(obj1[i].city);
// };

                //  Iterate the JSON using for loop

// for (let i = 0; i < obj.length; i++){
//     console.log(obj[i].isStudent);
// };



