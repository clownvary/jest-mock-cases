import plus from 'chapter1/plus';

describe('plus:', () => {
  it('plus function should return correct result', () => {
    expect(plus(1, 2)).toEqual(3);
    expect(plus(-1, -2)).toEqual(-3);
    expect(plus(-1, 2)).toEqual(1);
    // expect(plus(0.1, 0.2)).toEqual(0.3);
  });
});
