import { sleep } from 'k6';
import { thresholds, defaultTags } from '../../config/thresholds.js';
import { profiles } from '../../config/load-profiles.js';
import { getProducts } from '../api/serveRest.js';

export const options = {
  vus: profiles.smoke.vus,
  duration: profiles.smoke.duration,
  thresholds: thresholds.smoke,
  tags: defaultTags,
};

export default function () {
  getProducts();
  sleep(1);
}
