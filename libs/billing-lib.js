function getRate(storage) {
  if(storage <= 10) return 4;
  if(storage <= 100) return 2;
  return 1;
}

export function calculateCost(storage) {
  const rate = getRate(storage);

  return rate * storage * 100;
}