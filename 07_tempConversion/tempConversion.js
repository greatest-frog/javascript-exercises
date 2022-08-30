const ftoc = function(temperature) {
  return Number(((temperature-32)*5/9).toFixed(1));
}

const ctof = function(temperature) {
  return Number((32+temperature*9/5).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};