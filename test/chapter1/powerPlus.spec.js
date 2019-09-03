import powerPlus from 'chapter1/powerPlus';

describe('powerPlus:', () => {
  it('powerPlus should return correct result when parameters\'s type is int', () => {
    expect(powerPlus(1, 2)).toEqual(3);
    expect(powerPlus(-1, -2)).toEqual(-3);
    expect(powerPlus(-1, 2)).toEqual(1);
  });
  it('powerPlus should return correct result when parameters\'s type is float', () => {
    expect(powerPlus(0.1, 0.2)).toEqual(0.30);
  });
});
