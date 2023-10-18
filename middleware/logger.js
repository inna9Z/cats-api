import chalk from 'chalk';

const logger = (req, res, next) => {
    const url = chalk.green(req.url);
    const method = chalk.green(req.method);
    const status = chalk.green(res.statusCode);
    console.log(`${url}---${method}---${status}`);
    next();
};

export default logger;
