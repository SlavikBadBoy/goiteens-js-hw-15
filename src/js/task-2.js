import users from "./users.js";
const getUsersWithFriend = (users, friendName) => {
  // const result = [];
  // for (let i = 0; i < users.length; i += 1) {
  //   if (users[i].friends.includes(friendName)) {
  //     result.push(users[i].name);
  //   }
  // }
  // return result;
  return users.reduce((arrayOfNames, user) => {
    if (user.friends.includes(friendName)) {
      arrayOfNames.push(user.name);
    }
    return arrayOfNames
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
