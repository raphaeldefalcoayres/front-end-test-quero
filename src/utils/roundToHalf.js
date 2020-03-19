export default value => {
  const converted = parseFloat(value); // Make sure we have a number
  let decimal = converted - parseInt(converted, 10);
  decimal = Math.round(decimal * 10);
  // if (decimal === 5) {
  //   return parseInt(converted, 10) + 0.5;
  // }
  if (decimal < 3 || decimal > 7) {
    return Math.round(converted);
  }
  return parseInt(converted, 10) + 0.5;
};
