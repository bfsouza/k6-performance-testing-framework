import { sleep } from 'k6';
import { thresholds, defaultTags } from '../../config/thresholds.js';
import { profiles } from '../../config/load-profiles.js';
import { getProducts, createUser } from '../api/serveRest.js';
import { generateUser } from '../data/users.js';

export const options = {
  stages: profiles.spike.stages,
  thresholds: thresholds.spike,
  tags: defaultTags,
};

export default function () {
  getProducts();
  createUser(generateUser());
  sleep(0.25);
}
