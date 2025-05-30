import winston, { transport as Transport } from "winston";

const level = "debug";

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
} as const;

winston.addColors(colors);

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
} as const;

const format = winston.format.combine();

const transports: Transport[] = [
  new winston.transports.Console({
    level: "debug",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.printf((info) => {
        if (info.level.includes("error") || info.level.includes("warn")) {
          return `${info.timestame} ${info.level}: ${info.message}`;
        }
        return `${info.level}: ${info.message}`;
      })
    ),
  }),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({
    filename: "logs/all.log",
    level: level,
  }),
];

export const logger = winston.createLogger({
  level,
  levels,
  format,
  transports,
});

logger.exceptions.handle(
  new winston.transports.File({ filename: "logs/exceptions.log" })
);
logger.rejections.handle(
  new winston.transports.File({ filename: "logs/rejections.log" })
);

console.log("Logger initialized successfully!");

export default logger;
