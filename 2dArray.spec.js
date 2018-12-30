describe("2D array", () => {
  it("can nest other arrays", () => {
    // I heard you liked arrays so I put an array in your array, sorry it had to be said.
    const expected = [[1], [2], [3]];
    expect(expected[0]).toEqual([1]);
    expect(expected[1]).toEqual([2]);
    expect(expected[2]).toEqual([3]);
  });

  it("may get a bit crazy", () => {
    const expected = [[null, [null, null, 1]]];
    expect(expected[0][1][2]).toEqual(1);
  });

  it("may get a bit crazier", () => {
    const expected = [[[[[1]]]], [[[[2]]]], [[[[3]]]]];
    expect(expected[0][0][0][0]).toEqual([1]);
    expect(expected[1][0][0][0]).toEqual([2]);
    expect(expected[2][0][0][0]).toEqual([3]);
  });

  it("can allow us to create a matrix / grid", () => {
    /**
     * The mental picture you can make is this:
     * +-+-+-+
     * |1|2|3|
     * +-+-+-+
     * |4|5|6|
     * +-+-+-+
     * |7|8|9|
     * +-+-+-+
     * 
     * The first array is our y axis and the nested arrays are our x axis or "rows"
     */
    const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // row 1
    expect(expected[0][0]).toEqual(1);
    expect(expected[0][1]).toEqual(2);
    expect(expected[0][2]).toEqual(3);
    // row 2
    expect(expected[1][0]).toEqual(4);
    expect(expected[1][1]).toEqual(5);
    expect(expected[1][2]).toEqual(6);
    // row 3
    expect(expected[2][0]).toEqual(7);
    expect(expected[2][1]).toEqual(8);
    expect(expected[2][2]).toEqual(9);
  });
});
