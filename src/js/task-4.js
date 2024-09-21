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
const getSortedUniqueSkills = (users) => {
  let allSkills = [];

  for (let i = 0; i < users.length; i += 1) {
    for (let j = 0; j < users[i].skills.length; j += 1) {
      if (!allSkills.includes(users[i].skills[j])) {
        allSkills.push(users[i].skills[j]);
      }
    }
  }

  allSkills.sort((a, b) => (a > b ? 1 : -1));

  return allSkills;
};

console.log(getSortedUniqueSkills(users));
