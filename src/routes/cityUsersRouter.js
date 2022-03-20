const cityUsersRouter = require('express').Router();
const { getUsersByCity } = require('../controllers/getUsersByCity')

cityUsersRouter.route('/:city_name/users').get(getUsersByCity);

module.exports = cityUsersRouter;