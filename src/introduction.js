export function add(a, b)
{
  return a + b;
}

export function sub(a, b)
{
  return b - a;
}

export function sum(values)
{
  return values.reduce((resultat, element) => resultat + element, 0);
}

export function addToAll(values, toAdd)
{
  return values.map((element) => element + toAdd);
}

export function average(values)
{
  let resultat = null;
  if (values.length != 0) {
    resultat = sum(values)/values.length;
  }
  
  return resultat;
}

export function isAdult(user)
{
  return user.age >= 18;
}

export function isChild(user)
{
  return !isAdult(user);
}

export function extractAge(users)
{
  return users.map((user) => user.age);
}

export function adultFilter(users, type)
{
  if (type == "adult") {
    return users.filter(isAdult);

  } else if (type == "child") {
    return users.filter(isChild);

  } else {
    return users;
  }
}

export function ageAverage(users, type)
{
  return average(extractAge(adultFilter(users, type)));
}

export function isAllAdult(users)
{
  return users.every(isAdult);
}

export function hasChild(users)
{
  return !isAllAdult(users);
}

export function addIsAdultProperty(users)
{
  return users.map((user) => ({...user, isAdult: isAdult(user)}));
}
