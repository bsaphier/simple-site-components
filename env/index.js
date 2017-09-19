let environment;

function getEnvironment() {
    return process.env.NODE_ENV === 'production'
        ? require('./environment.prod.js').default
        : require('./environment.dev.js').default;
}

export default getEnvironment();
