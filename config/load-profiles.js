export const profiles = {
  smoke: {
    vus: 1,
    duration: '30s',
  },
  load: {
    stages: [
      { duration: '30s', target: 5 },
      { duration: '2m', target: 10 },
      { duration: '2m', target: 20 },
      { duration: '30s', target: 0 },
    ],
  },
  stress: {
    stages: [
      { duration: '30s', target: 10 },
      { duration: '2m', target: 25 },
      { duration: '2m', target: 50 },
      { duration: '30s', target: 0 },
    ],
  },
  spike: {
    stages: [
      { duration: '20s', target: 10 },
      { duration: '20s', target: 40 },
      { duration: '40s', target: 80 },
      { duration: '20s', target: 10 },
      { duration: '20s', target: 0 },
    ],
  },
};

export const baseUrl = 'https://serverest.dev';
