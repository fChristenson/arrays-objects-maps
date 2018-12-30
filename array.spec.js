describe("Array", () => {
  it("can be created in multiple ways", () => {
    const expected = new Array();
    const actual = [];
    expect(expected).toEqual(actual);
  });

  it("has a type", () => {
    const expected = "object";
    const actual = typeof [];
    expect(expected).toEqual(actual);
  });

  it("can be useful to know if something is an array", () => {
    const expected = true;
    const actual = Array.isArray([]); // this will tell you if something is an array
    expect(expected).toEqual(actual);
  });

  it("can hold values", () => {
    // .length gives us the length of the array
    const expected = [1, "2", /3/, {}, true, 1 + 1].length;
    const actual = 6;
    expect(expected).toEqual(actual);
  });

  it("can provide values", () => {
    const expected = [1, "2", /3/, {}, true, 1 + 1];
    // arrays start at index 0
    expect(expected[0]).toEqual(1);
    expect(expected[1]).toEqual("2");
    expect(expected[2]).toEqual(/3/);
    expect(expected[3]).toEqual({});
    expect(expected[4]).toEqual(true);
    expect(expected[5]).toEqual(2);
  });

  it("will return undefined if we ask for something that isn't there", () => {
    const expected = [1, 2, 3];
    const actual = undefined;
    expect(expected[-1]).toEqual(actual);
    expect(expected[999]).toEqual(actual);
  });
});
