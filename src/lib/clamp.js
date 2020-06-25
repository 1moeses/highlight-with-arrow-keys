export const clamp = ({ value, min, max }) => {
  if (value < min) {
    return min;
  }
  if (max !== null && value > max) {
    return max;
  }
  return value;
};
