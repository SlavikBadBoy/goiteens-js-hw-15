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
const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));
