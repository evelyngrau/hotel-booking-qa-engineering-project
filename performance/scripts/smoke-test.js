import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const homePage = http.get('https://automationintesting.online/');

  check(homePage, {
    'homepage status is 200': (response) => response.status === 200,
    'homepage response time is below 1000ms': (response) =>
      response.timings.duration < 1000,
  });

  sleep(1);
}
