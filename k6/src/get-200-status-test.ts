import { check, sleep } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options: Options = {
  vus: 50,
  duration: '10s',
};

export default function () {
  const result = http.get('http://test.k6.io');
  check(result, {
    'status is 200': () => result.status === 200,
  });
  sleep(1);
}
