const cityUsers = [
    { 
        "id": 688, 
        "first_name": "A", 
        "last_name": "A", 
        "email": "t@email.com", 
        "ip_address": "141.49.93.0", 
        "latitude": 37.13, 
        "longitude": -84.08 
    }, 
    { 
        "id": 794, 
        "first_name": "B", 
        "last_name": "B", 
        "email": "k1@email.com", 
        "ip_address": "203.138.133.164", 
        "latitude": 51.509865, 
        "longitude": -0.118092 
    }
];

const allUsersWithCityUsers = [
    { 
        "id": 794, 
        "first_name": "C", 
        "last_name": "C", 
        "email": "k1@email.com", 
        "ip_address": "203.138.133.164", 
        "latitude": 51.509865, 
        "longitude": -0.118092 }
]

const allUsersWithNoCityUsers = [
    { 
        "id": 680, 
        "first_name": "A", 
        "last_name": "A", 
        "email": "t@email.com", 
        "ip_address": "141.49.93.0", 
        "latitude": 53.522820, 
        "longitude": -1.128462 
    }, 
]

const allUsersWithCityDuplicates = [
    { 
        "id": 794, 
        "first_name": "B", 
        "last_name": "B", 
        "email": "k1@email.com", 
        "ip_address": "203.138.133.164", 
        "latitude": 51.509865, 
        "longitude": -0.118092 
    },
    { 
        "id": 795, 
        "first_name": "M", 
        "last_name": "M", 
        "email": "k1@email.com", 
        "ip_address": "203.138.133.164", 
        "latitude": 51.509865, 
        "longitude": -0.118092 
    }
]

module.exports = { 
    cityUsers,
    allUsersWithCityDuplicates, 
    allUsersWithCityUsers, 
    allUsersWithNoCityUsers};

