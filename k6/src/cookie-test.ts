import http from 'k6/http';

function logCookie(cookie: any) {
  // Here we log the name and value of the cookie along with additional attributes.
  // For full list of attributes see: https://k6.io/docs/using-k6/cookies#properties-of-a-response-cookie-object
  console.log(
    `${cookie.name}: ${cookie.value}\n\tdomain: ${cookie.domain}\n\tpath: ${cookie.path}\n\texpires: ${cookie.expires}\n\thttpOnly: ${cookie.http_only}`
  );
}

export default function () {
  const res = http.get('https://www.google.com/');

  // Method 1: Use for-loop and check for non-inherited properties
  for (const name in res.cookies) {
    if (res.cookies.hasOwnProperty(name) !== undefined) {
      logCookie(res.cookies[name][0]);
    }
  }

  // Method 2: Use ES6 Map to loop over Object entries
  new Map(Object.entries(res.cookies)).forEach((v) => logCookie(v[0]));
}