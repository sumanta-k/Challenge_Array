//challenge 1
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  const youngPeople = people
  .filter((x)=>{
    return x.age <= 25;
  }).map((x)=>{
    return {
        name:x.firstName +' '+ x.lastName,
        email:x.email
    };
  });
//   console.log(youngPeople);
  
//challenge 2
//add all the positive numbers in the array
const numbers = [2,-30,50,20,-12,-9,7];
const positiveSum = numbers.filter((number)=>{
    return number > 0;
}).reduce((acc,cur)=>{
    return acc+= cur;
},0);
// console.log(positiveSum);

//challenge 3
//capitalizeWords 

const words = ['coder','programmer','developer'];
const ans = words.map((item)=>{
    return item.charAt(0).toUpperCase()+item.slice(1);
});
console.log(ans);