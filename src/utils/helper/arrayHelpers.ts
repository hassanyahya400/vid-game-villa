export const getRandomItem = <T>(arr: any[] | undefined): T | undefined => {
  if (!arr) return undefined;

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
