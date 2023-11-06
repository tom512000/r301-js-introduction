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
  let resultat = 0;
  for (var i = 0; i < values.length; i++) {
    resultat += values[i];
  }

  return resultat;
}
