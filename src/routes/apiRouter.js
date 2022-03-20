const apiRouter = require('express').Router();
const cityUsersRouter = require('./cityUsersRouter');

apiRouter.use('/city', cityUsersRouter);

module.exports = apiRouter;