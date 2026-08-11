export const profiles = {
  smoke: {
    vus: 1,
    duration: '30s',
  },
  load: {
    stages: [
      { duration: '20s', target: 2 },
      { duration: '1m', target: 4 },
      { duration: '1m', target: 6 },
      { duration: '20s', target: 0 },
    ],
  },
  stress: {
    stages: [
      { duration: '20s', target: 3 },
      { duration: '1m', target: 8 },
      { duration: '1m', target: 12 },
      { duration: '20s', target: 0 },
    ],
  },
  spike: {
    stages: [
      { duration: '10s', target: 2 },
      { duration: '15s', target: 6 },
      { duration: '20s', target: 10 },
      { duration: '10s', target: 2 },
      { duration: '10s', target: 0 },
    ],
  },
};

export const baseUrl = 'https://serverest.dev';
