const axios = require('axios');

const BASE_URL = 'https://bpdts-test-app.herokuapp.com/';

const fetchUsers = (req, res, next) => {
    return axios.get(`${BASE_URL}users`);
};

const fetchUsersByCity = city => {
    return axios.get(
        `${BASE_URL}city/${city}/users`
    )
};

module.exports = { fetchUsers, fetchUsersByCity };