import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
stages: [
    { duration: '30s', target: 5 },
    { duration: '1m', target: 5 },
    { duration: '30s', target: 0 },
],
thresholds: {
    http_req_failed: ['rate<0.02'],
    http_req_duration: ['p(95)<1500'],
    checks: ['rate>0.95'],
},
};

export default function () {
const homePage = http.get('https://automationintesting.online/');

check(homePage, {
    'homepage status is 200': (response) => response.status === 200,
    'homepage response time is below 1500ms': (response) =>
    response.timings.duration < 1500,
});

sleep(1);
}