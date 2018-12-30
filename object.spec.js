describe("Associate array / Object", () => {
  it("can be created in multiple ways", () => {
    const expected = new Object();
    const actual = {};
    expect(expected).toEqual(actual);
  });

  it("has a type", () => {
    const expected = "object";
    const actual = typeof {};
    expect(expected).toEqual(actual);
  });

  it("can hold values", () => {
    // We can't use .length but Object.keys will give us the key names and that works just as well
    const expected = Object.keys({ foo: "foo", bar: 1, baz: /baz/ }).length;
    const actual = 3;
    expect(expected).toEqual(actual);
  });

  it("can provide values", () => {
    const expected = { foo: "foo", bar: 1, baz: /baz/ };
    expect(expected.foo).toEqual("foo");
    expect(expected.bar).toEqual(1);
    expect(expected.baz).toEqual(/baz/);
  });

  it("can provide values with string index", () => {
    const expected = { "foo-bar": "foobar", fooBar: "foobar" };
    expect(expected["foo-bar"]).toEqual("foobar");
    expect(expected.fooBar).toEqual("foobar");
  });

  it("will return undefined if we ask for something that isn't there", () => {
    const expected = {};
    expect(expected["foo-bar"]).toEqual(undefined);
    expect(expected.fooBar).toEqual(undefined);
  });
});
