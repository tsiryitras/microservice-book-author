import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config({ path: '.env' });

const conf = {
  mongoConf: env.get('MONGO_URI').required().asString(),
  jwt_secret: env.get('JWT_SECRET').required().asString(),
  jwt_expires: env.get('JWT_EXPIRES').required().asString(),
  rabbitmq: env.get('RABBITMQ_URI').required().asString(),
};

export default () => conf;
