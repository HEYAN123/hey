const heyd = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

heyd.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  heyd.locales[matches[1]] = req(mod).default;
});

module.exports = heyd;
