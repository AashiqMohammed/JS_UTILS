
// Finds Duplicate values for a given key in an array of objects
const findDuplicateByKey= (arr, key) => {
  return arr
    .map((x) => x[key])
    .filter((item, pos, self) => self.indexOf(item) !== pos)
    .filter((item, pos, self) => self.indexOf(item) === pos);
}

module.exports = {
  findDuplicateByKey
}

