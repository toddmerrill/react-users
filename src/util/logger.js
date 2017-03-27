const LogEntries = require('../../lib/le.min.js');

const getLogger = (token, opts = {}) => {
  if (!token) {
    throw new Error('Missing logentries token for server-side logging');
  }

  LogEntries.init({ ...opts, token });
  return LogEntries;
};

// until immutability is set up with Immutable or Ramda
// not necessary if not exporting LEVEL I suppose
const addReadOnlyProperty = (obj, prop, value) => {
  Object.defineProperty(obj, prop, {
    value,
    writable: false,
    enumerable: true,
    configurable: true,
  });
  return obj;
};

const LEVEL = (() => {
  const levobj = addReadOnlyProperty({}, 'ERROR', 'error');
  addReadOnlyProperty(levobj, 'WARN', 'warn');
  addReadOnlyProperty(levobj, 'INFO', 'info');
  addReadOnlyProperty(levobj, 'LOG', 'log');
  return levobj;
})();

// Using free tier from logentries.com
const Logger = getLogger('f6633dc0-225c-4081-b807-8c4323098bbd', { trace: true });

// currently logs to console also.  Could be configured
// to be off in PROD
const logMessage = (level, message) => {
  console.log(level, '-', message); // eslint-disable-line no-console
  Logger[level](message);
};

const error = message => logMessage(LEVEL.ERROR, message);
const warn = message => logMessage(LEVEL.WARN, message);
const info = message => logMessage(LEVEL.INFO, message);
const log = message => logMessage(LEVEL.LOG, message);

module.exports = {
  error,
  warn,
  info,
  log,
};
