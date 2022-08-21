import developmentConfig from './development';
import productionConfig from './production';

const configs = {
    development: developmentConfig,
    production: productionConfig,
};
console.log("****$$$$:"+process.env.NODE_ENV);
const env = process.env.NODE_ENV || 'development';

export default () => configs[env];