// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { People, Home } = initSchema(schema);

export {
  People,
  Home,
  Sex
};