export const getRandomNumberBetween = (max: number, min = 0) => {
  if ((max <= min && max !== 0) || max < min)
    throw new Error("Max value should be bigger than min value!");
  return Math.floor(Math.random() * (max - min + 1) + min);
};
