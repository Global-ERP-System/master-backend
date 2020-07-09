let keys = {};

if(process.env.NODE_ENV === 'test') {
    keys['apiUrl'] = "http://localhost:3000";
    keys['contentType'] = "application/json";
    keys['secret'] = "supersecret";
    keys['MONGODB_URI'] = "mongodb://localhost:27017/Profile";
}

exports.keys = keys;
