Object.defineProperty(String.prototype, 'distance', {
  value: function (param: string) {
    // your code …
    return 'counting distance between ' + this + ' and ' + param;
  },
});

const newStringWithPrototypeMethod = 'foo'.distance('bar');

console.log(newStringWithPrototypeMethod);
