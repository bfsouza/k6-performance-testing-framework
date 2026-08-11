import http from 'k6/http';
import { check, sleep } from 'k6';
import { baseUrl } from '../../config/load-profiles.js';

export function getProducts() {
  const res = http.get(`${baseUrl}/produtos`);

  check(res, {
    'GET /produtos status 200': (r) => r.status === 200,
    'GET /produtos has products': (r) => r.json('produtos') !== undefined,
  });

  sleep(1);
  return res;
}

export function createUser(payload) {
  const res = http.post(`${baseUrl}/usuarios`, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'POST /usuarios status 201 or 200': (r) => r.status === 201 || r.status === 200,
  });

  sleep(1);
  return res;
}

export function getUserById(userId) {
  const res = http.get(`${baseUrl}/usuarios/${userId}`);

  check(res, {
    'GET /usuarios/{id} status 200': (r) => r.status === 200,
  });

  sleep(1);
  return res;
}
