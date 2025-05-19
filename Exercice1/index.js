function pairNumbers(min, max) {
  let result = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result += i + ",";
    }
  }
  return result.slice(0, -1);
}

export default pairNumbers;
