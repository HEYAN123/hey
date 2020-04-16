import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('heyd dist files', () => {
  // https://github.com/ant-design/ant-design/issues/1638
  // https://github.com/ant-design/ant-design/issues/1968
  it('exports modules correctly', () => {
    const heyd = testDist ? require('../dist/heyd') : require('../components'); // eslint-disable-line
    expect(Object.keys(heyd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('should have heyd.version', () => {
      const heyd = require('../dist/heyd'); // eslint-disable-line
      expect(heyd.version).toBe(pkg.version);
    });
  }
});
