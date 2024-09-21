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
const getUsersWithFriend = (users, friendName) => {
  const result = [];
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].friends.includes(friendName)) {
      result.push(users[i].name);
    }
  }
  return result;
};

console.log(getUsersWithFriend(users, "John"));
