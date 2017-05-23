const findUsers = (users: Array<User>, predicate: User => Boolean): Array<User> => {
  const matches: Array<User> = [];
  for (let user of users) {
    if (predicate(user)) {
      matches.push(user);
    }
  }
  return matches;
};
