describe("Math Test ", function () {
  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
  });
  it("raises to n-th power", function () {
    assert.isNaN(pow(2, 0.5));
  });
  it("masahat", function () {
    assert.equal(calculateSurface(1), Math.PI);
  });
  it("masahat", function () {
    assert.equal(calculateSurface(4.5), 63.61725123519331);
  });
});

describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x * x;
    it(`${x} in the power 3 is ${expected}`, function () {
      assert.equal(pow(x, 4), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
