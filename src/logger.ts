import { createLogger, format, transports } from "winston";

const myFormat = format.printf((info) => {
  return `${info.timestamp} ["Application"] ${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: "debug",
  exitOnError: false,
  format: format.combine(format.colorize(), format.timestamp(), myFormat),
  transports: [new transports.Console()],
});

export default logger;
