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
  return values.reduce((resultat, x) => resultat + x, 0);
}

export function addToAll(values, toAdd)
{
  return values.map((x) => x + toAdd);
}

export function average(values)
{
  let resultat = null;
  if (values.length != 0) {
    resultat = sum(values)/values.length;
  }
  
  return resultat;
}
