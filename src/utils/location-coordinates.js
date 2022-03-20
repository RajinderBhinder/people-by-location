const locationCoordinates = {
    London: {
        latitude: 51.509865,
        longitude: -0.118092
    }
};

/**
 * Could use a public API eg. Geocoding, to get the coordinates of 
 * different locations if the functionality needs to be extended
 */
module.exports.getLocationCoordinates = city => {
    return locationCoordinates[city] === undefined ? new Error('City Coordinates not found', { status: 404 }) : locationCoordinates[city];
};