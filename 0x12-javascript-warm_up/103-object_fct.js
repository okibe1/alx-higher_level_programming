let obj = {
  value: 0,
  
  getValue() {
    return this.value;
  },

  setValue(newValue) {
    this.value = newValue;
  },

  incr() {
    this.value++;
  }
};

console.log(obj.getValue()); // 0
obj.incr();
console.log(obj.getValue()); // 1
