export const thresholds = {
  smoke: {
    'http_req_duration': ['p(95)<800'],
    'http_req_failed': ['rate<0.01'],
    'checks': ['rate>0.95'],
  },
  load: {
    'http_req_duration': ['p(95)<1500'],
    'http_req_failed': ['rate<0.05'],
    'checks': ['rate>0.90'],
  },
  stress: {
    'http_req_duration': ['p(95)<2000'],
    'http_req_failed': ['rate<0.10'],
    'checks': ['rate>0.85'],
  },
  spike: {
    'http_req_duration': ['p(95)<2500'],
    'http_req_failed': ['rate<0.10'],
    'checks': ['rate>0.85'],
  },
};

export const defaultTags = {
  project: 'k6-performance-framework',
  environment: 'dev',
  target: 'serverest',
};
