function getEnvironment() {
    return process.env.NODE_ENV === 'production'
        ? require('./env.production.js')
        : require('./env.development.js');
}

module.exports = getEnvironment();
