# Basic Load Test Summary

## Test Objective

Validate the basic performance and stability of the hotel booking application homepage under a light load scenario.

## Tool

k6

## Target

https://automationintesting.online/

## Scenario

- Test type: Basic load test
- Ramp-up: 30 seconds to 5 virtual users
- Sustained load: 5 virtual users for 1 minute
- Ramp-down: 30 seconds to 0 virtual users
- Total duration: 2 minutes
- Maximum virtual users: 5

## Thresholds

| Metric | Threshold | Result |
|---|---|---|
| http_req_failed | rate < 2% | Passed |
| http_req_duration | p95 < 1500ms | Passed |
| checks | rate > 95% | Passed |

## Execution Results

| Metric | Result |
|---|---|
| Checks | 100.00% |
| Failed requests | 0.00% |
| Average response time | 405.55ms |
| Median response time | 469.2ms |
| p90 response time | 483.85ms |
| p95 response time | 489.74ms |
| Max response time | 791.44ms |
| Total requests | 332 |
| Completed iterations | 332 |
| Max virtual users | 5 |
| Data received | 3.9 MB |
| Data sent | 38 KB |

## Conclusion

The basic load test passed successfully. The homepage remained available under light load, no HTTP requests failed, and the p95 response time stayed well below the defined 1500ms threshold.

This result indicates stable behavior for the homepage under a controlled light load scenario.

## Notes

This test was intentionally limited to a light load because the application under test is a public demo environment. The goal was to demonstrate performance testing skills using k6 without generating excessive traffic against a public service.