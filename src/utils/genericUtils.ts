const BuildConfig = require('react-native-build-config')

export const getNasaApiKey = () => {
    return BuildConfig.NASA_API_KEY;
}

export const getBaseUrl = () => {
    return BuildConfig.BASE_URL;
}