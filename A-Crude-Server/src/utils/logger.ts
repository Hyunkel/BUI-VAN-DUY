import log4js from 'log4js';

log4js.configure({
  appenders: { 
    out: { type: 'stdout' },
    file: { type: 'file', filename: 'logs/app.log' }
  },
  categories: { 
    default: { appenders: ['out', 'file'], level: 'debug' } 
  }
});

const logger = log4js.getLogger();

export default logger;
