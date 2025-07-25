// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// ------------------------------------------
// let myName = {
//   firstName: "Ahmed",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// let myName = {
//   firstName: "Ahmed",
//   lastName: "Irfan",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// john.fullName();

// ------------------------------------------
// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: "Ahmed",
//     lastName: "Irfan",
//     fullName: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
//       );
//     },
//   };
// }

// const john = createPerson("John", "Doe", "Python");
// const alex = createPerson("Alex", "WebDev", "Golang");
// const jordan = createPerson("jordan", "peterson", "JavaScript");
// console.log(john);
// console.log(alex);
// console.log(jordan);

// console.log(john.fullName());
// console.log(huxn.fullName());
// console.log(jordan.fullName());
// ------------------------------------------

// ------------------------------------------
function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    fullName: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
      );
    },
  };
}

const john = createPerson("John", "Doe", "Python");
const huxn = createPerson("HuXn", "WebDev", "Golang");
const jordan = createPerson("jordan", "peterson", "JavaScript");
console.log(john);
console.log(huxn);
console.log(jordan);

console.log(john.fullName());
console.log(huxn.fullName());
console.log(jordan.fullName());
// ------------------------------------------
