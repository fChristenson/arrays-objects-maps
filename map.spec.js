describe("Map", () => {
  it("can be created in one way", () => {
    const expected = new Map(); // we could also use a WeakMap
    const actual = {};
    expect(expected).not.toEqual(actual);
  });

  it("has a type", () => {
    const expected = "object";
    const actual = typeof new Map();
    expect(expected).toEqual(actual);
  });

  it("can hold values", () => {
    // We can't use .size to get the length
    const map = new Map();
    map.set("foo", "foo");
    map.set("bar", 1);
    map.set("baz", /baz/);
    const expected = map.size;
    const actual = 3;
    expect(expected).toEqual(actual);
  });

  it("can provide values", () => {
    const expected = new Map();
    expected.set("foo", "foo");
    expected.set("bar", 1);
    expected.set("baz", /baz/);
    expect(expected.get("foo")).toEqual("foo");
    expect(expected.get("bar")).toEqual(1);
    expect(expected.get("baz")).toEqual(/baz/);
  });

  it("will return undefined if we ask for something that isn't there", () => {
    const expected = new Map();
    expect(expected.get("foo")).toEqual(undefined);
  });
});
