import log4js from 'log4js';

log4js.configure({
  appenders: { out: { type: 'stdout' }, app: { type: 'file', filename: 'application.log' } },
  categories: { default: { appenders: ['out', 'app'], level: 'debug' } }
});

export const logger = log4js.getLogger();
export const log4jsMiddleware = log4js.connectLogger(logger, { level: 'auto' });
