import { check, group, sleep } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';
import { Trend } from 'k6/metrics';

export let options: Options = {
  vus: 5,
  duration: '2s',
};

const customTrend = new Trend('trend_custom');
const taggedTrend = new Trend('trend_tagged');

export default function () {

  group('Browse test.k6.io', function () {
    const result = http.get('http://test.k6.io', {
      tags: { tag_key: 'tag_value' },
    });

    check(result, {
      'status is 200': () => result.status === 200,
      'body size is 11,105 bytes': () => !!JSON.stringify(result.body).match(/k6/),
    });
    sleep(1);

    customTrend.add(result.timings.connecting);
    taggedTrend.add(result.timings.connecting, { tag_connection_time: 'k6_website'});
  });
}
