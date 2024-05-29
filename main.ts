// ASSIGNMENT 01
//BUILDING MY FRIEND LIST
// TASK : Create a program that manages a simple friend list.
type Friends = {firstName:string; lastName:string; id:number;}
const people = { friends :[] as Friends[]}
let friend1={
    firstName: "Umme",
    lastName: "Kulsoom",
    id: 408,
}

let friend2= {
    firstName: "Isra",
    lastName: "Khan",
    id: 566,
}

let friend3= {
    firstName: "Manahil",
    lastName: "Shah",
    id: 352,
}
 
people.friends.push(friend1,friend2,friend3)
 console.log(people);


 // ASSIGNMENT 02
//MANIPULATING AN ARRAY: REARRANGING WORDS 

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
const stringArray = scrambledArray.map(element => element.toString())
const Rearranging = []

Rearranging.push(stringArray.splice(stringArray.indexOf("I"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("am"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("a"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("student"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("of"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("GIAIC"),1)[0])  

const sentence = Rearranging.join(" ")
console.log(sentence);



//ASSIGNMENT : 03
//COMPANY PRODUCT CATALOG

let inventory = [];

type Product={
    name:string,
    model:string,
    price:number,
    quantity:number,
}

let product1={
    name:"chevrolet",
    model:"2020",
    price:1000000,
    quantity:1,
};

let product2={
    name:"iphone15",
    model:"2023",
    price:500000,
    quantity:3,
};

let product3={
    name:"rolex",
    model:"2022",
    price:20000,
    quantity:5
};

inventory.push(product1,product2,product3)
console.log(inventory[2].quantity);

let product4 ={
    name:"Mobile Phones",
    model:2024,
    cost:20000,
    quantity:45
}
inventory.push(product4)
console.log(inventory);
console.log(inventory[0].name);  

inventory[1].quantity = 120;
console.log(inventory[1].quantity)



//ASSIGNMENT : 04
// STUDENT LIST ORGANIZER

interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}
const students: Student[] = [
    { name: "Manal",
     isSenior: true, 
     hasCompletedAssignments: false 
    },
    { name: "Tanzeela",
    isSenior: true,
    hasCompletedAssignments: true 
},
{ name: "Rabia",
isSenior: false,
hasCompletedAssignments: true 
},
{ name: "Ayesha",
 isSenior: false,
  hasCompletedAssignments: false 
},
];
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed assignments:", seniorStudentsWithAssignments);
function removeStudentsWithoutAssignments(students: Student[]): Student[] {
    return students.filter(student => student.hasCompletedAssignments);
}
const updatedClassList = removeStudentsWithoutAssignments(students);
console.log("Updated class list:", updatedClassList);