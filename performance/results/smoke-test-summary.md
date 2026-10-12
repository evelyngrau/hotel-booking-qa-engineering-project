# Smoke Performance Test Summary

## Test Objective

Validate the basic availability and response time of the hotel booking application homepage using a lightweight smoke performance test.

## Tool

k6

## Target

https://automationintesting.online/

## Scenario

- Virtual users: 1
- Duration: 30 seconds
- Test type: Smoke performance test

## Thresholds

| Metric | Threshold | Result |
|---|---|---|
| http_req_failed | rate < 1% | Passed |
| http_req_duration | p95 < 1000ms | Passed |
| checks | rate > 95% | Passed |

## Execution Results

| Metric | Result |
|---|---|
| Checks | 100.00% |
| Failed requests | 0.00% |
| Average response time | 584.71ms |
| Median response time | 643.24ms |
| p90 response time | 677.79ms |
| p95 response time | 718.46ms |
| Max response time | 946.83ms |
| Total requests | 19 |

## Conclusion

The smoke performance test passed successfully. The homepage was available during the test, no HTTP requests failed, and the p95 response time remained below the defined 1000ms threshold.

This result indicates that the homepage is stable under a minimal smoke performance scenario.