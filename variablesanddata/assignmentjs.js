const users = [
    {name:"Aadi", age:20},
    {name:"Rahul", age:17},
    {name:"Aryan", age:22}
];
// use map for user mapping, filter for age gt 18 and find for rahul

const userNames=users.map((user)=>  { return user.name});

console.log(userNames);

const filterAge=users.filter((user)=>{  return user.age>18});

console.log(filterAge);

const findRahul=users.find((user)=> { if (user.name =="Rahul") return user.name});
console.log(findRahul);