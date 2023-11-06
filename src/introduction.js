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
  let resultat = false;
  if (user.age >= 18) {
    resultat = true;
  }

  return resultat;
}

export function isChild(user)
{
  return !isAdult(user);
}

export function extractAge(users)
{
  return users.map((user) => user.age);
}
