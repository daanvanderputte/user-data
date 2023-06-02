// This is the logic for transforming the user data

const userData = {
  _id: "6479b4e6148d9ea1987410a9",
  firstName: "Daan",
  lastName: "van der Putte",
  age: 35,
  email: "daanvanderputte@pm.me",
  __v: 0,
};

const currentYear = new Date().getFullYear();

userData.name = `${userData.firstName} ${userData.lastName}`;

delete userData.firstName;
delete userData.lastName;

userData.birthYear = currentYear - userData.age;

console.log(userData);
