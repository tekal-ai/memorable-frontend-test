export const getRandomItemTool = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
