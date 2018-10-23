const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string value', () => {
    var res = isRealString(13);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('should allow string with non-spaces characters', () => {
    var res = isRealString('  Vivek  ');
    expect(res).toBe(true);
  });
});
