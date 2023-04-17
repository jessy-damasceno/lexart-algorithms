const calculator = {
  add: function(...values) {
    if (values.length === 1 && Array.isArray(values[0])) {
      values = values[0];
    }
    return values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  },
  subtract: function(...values) {
    if (values.length === 1 && Array.isArray(values[0])) {
      values = values[0];
    }
    return values.reduce((accumulator, currentValue) => accumulator - currentValue);
  },
  multiply: function(...values) {
    if (values.length === 1 && Array.isArray(values[0])) {
      values = values[0];
    }
    return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  },
  divide: function(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
};