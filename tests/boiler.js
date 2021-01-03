function selfReturningFunction() {
  return selfReturningFunction;
}

module.exports = {
  basicDataExamples: {
    "positive one": 1,
    "array of integers": ["first", "second", "third"],
    "basic object": {
      age: 12,
      speed: 52,
      color: "blue",
    },
    zero: 0,
    "negative one": -1,
    "basic string": "This is an example string",
    "positive integer": 51852,
    "negative integer": -105297835820,
    "empty string": "",
  },
  complexDataExamples: {
    "empty arrow function": () => {},
    "empty inline function": function () {},
    "positive float": 152.41242,
    "negative float": -51294.24141412,
    "function that returns true": () => true,
    "function that returns false": () => false,
    "function that returns null": () => null,
    "function that returns itself": selfReturningFunction,
    "function that returns an empty object": () => ({}),
    "function that returns a basic object": () => ({
      price: 52.12,
      color: "green",
      flavor: "mint",
    }),
    "nested mix of objects, arrays, and primitive data": [
      {
        a: "f",
        b: [1, 5, 2],
      },
      "second",
      {
        height: 33,
      },
    ],
    "Native JS Class": String,
    "example symbol": Symbol(),
    "NaN (Not a Number)": NaN,
    "positive infinity": Infinity,
    "negative infinity": -Infinity,
  },
};
