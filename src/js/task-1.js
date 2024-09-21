const users = [
  {
    name: "John",
    balance: 1000,
    friends: ["Paul", "Anna"],
    skills: ["JavaScript", "React"],
  },
  {
    name: "Jane",
    balance: 1500,
    friends: ["John", "Anna"],
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Paul",
    balance: 2000,
    friends: ["John"],
    skills: ["Node.js", "Express", "React"],
  },
  {
    name: "Anna",
    balance: 1200,
    friends: ["Jane", "Paul"],
    skills: ["HTML", "CSS", "React"],
  },
];
const getTotalBalance = (users) => {
  let totalBalance = 0;
  for (let i = 0; i < users.length; i += 1) {
    totalBalance += users[i].balance;
  }
  return totalBalance;
};
console.log(getTotalBalance(users));
