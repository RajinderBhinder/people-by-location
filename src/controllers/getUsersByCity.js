const GeoPoint = require('geopoint');
const geopoint = require('geopoint');
const { fetchUsers, fetchUsersByCity } = require('../utils/bpdts-test-api');
const { getLocationCoordinates } = require('../utils/location-coordinates');

exports.getUsersByCity = async (req, res, next) => {
    try {
        const { city_name } = req.params;
        // Converting to capital case for bpdts-test-api
        const cityName = `${city_name[0].toUpperCase()}${city_name.slice(1)}`;

        const { data: cityUsers } = await fetchUsersByCity(cityName);
        const { data: allUsers } = await fetchUsers();
        
        const cityCoordinates = getLocationCoordinates(cityName);

        const cityGeopoint = new GeoPoint(cityCoordinates.latitude, cityCoordinates.longitude);

        // Filter allUsers to find users that are within 50 miles of the city
        const usersInCityRadius = allUsers.filter(user => {
            const userGeopoint = new GeoPoint(parseInt(user.latitude), parseInt(user.latitude));
            const distance = userGeopoint.distanceTo(cityGeopoint);

            if (distance < 50) return user;
        });

        // combine users that are in city Radius or are listed as living in the city
        const allUsersForCity = [...cityUsers, ...usersInCityRadius];

        // remove any duplicates
        const uniqueUsers = [...new Set(allUsersForCity)];

        res.status(200).send(uniqueUsers);
        
    } catch (error) {
        res.status(error.status || 500).send(error.message || 'Internal Server Error')
    }
    
};