import { sleep, check } from 'k6';
import { Options } from 'k6/options';

/* @ts-ignore */
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import http from 'k6/http';

export let options:Options = {
  vus: 5,
  duration: '10s'
};

function logResponse(response: { body: any }) {
  console.log(response.body);
}

export default () => {
  const res = http.post('https://httpbin.org/status/400');
  logResponse(res);
  check(res, {
    'status is 400': () => res.status === 400,
  });
  sleep(randomIntBetween(1,5));
};
