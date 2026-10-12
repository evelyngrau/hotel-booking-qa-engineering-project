# Performance Testing

This folder contains performance testing scripts and results for the Hotel Booking QA Project.

## Tool

k6

## Application Under Test

https://automationintesting.online/

## Scope

Performance testing was executed against the public hotel booking demo application.

The objective was not to stress the public service, but to demonstrate basic performance testing skills using k6, including:

- Smoke performance testing
- Basic load testing
- Checks
- Thresholds
- Response time analysis
- Error rate monitoring
- Result interpretation

## Tests Included

| Test | Script | Summary |
|---|---|---|
| Smoke Test | `scripts/smoke-test.js` | Validates homepage availability and response time with 1 virtual user for 30 seconds |
| Basic Load Test | `scripts/load-test.js` | Validates homepage behavior under light load with up to 5 virtual users |

## Thresholds Used

### Smoke Test

| Metric | Threshold |
|---|---|
| http_req_failed | rate < 1% |
| http_req_duration | p95 < 1000ms |
| checks | rate > 95% |

### Basic Load Test

| Metric | Threshold |
|---|---|
| http_req_failed | rate < 2% |
| http_req_duration | p95 < 1500ms |
| checks | rate > 95% |

## Results

| Test | Status | p95 Response Time | Failed Requests | Checks |
|---|---|---|---|---|
| Smoke Test | Passed | 718.46ms | 0.00% | 100.00% |
| Basic Load Test | Passed | 489.74ms | 0.00% | 100.00% |

## Files

```text
performance/
├── scripts/
│   ├── smoke-test.js
│   └── load-test.js
├── results/
│   ├── smoke-test-summary.json
│   ├── smoke-test-summary.md
│   ├── load-test-summary.json
│   └── load-test-summary.md
└── README.md