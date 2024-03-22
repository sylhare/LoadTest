# K6 Testing

## Installation

```bash
npm install
```

## k6 Test

### Running the test

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript running a bundler. 
This project uses `Babel` and `Webpack` to bundle the different files into ES modules (ESM), using its [`webpack.config.js`](./webpack.config.js) configuration.

The next command transforms each TypeScript test in `./src` to the `./dist` folder as ES modules.

```bash
npm run bundle
```

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/get-200-status-test.js
```

### Run the test with output

To generate the json line file:

```bash
k6 run ./dist/get-200-status-test.js  --out json=result.jsonl
```

To transform the json line file into a normal json:

```bash
node jsonl-to-json.js
```

### More information

**See also**

- [Using k6 / Modules](https://grafana.com/docs/k6/latest/using-k6/modules/)
- [Using k6 / JavaScript compatibility mode](https://grafana.com/docs/k6/latest/using-k6/javascript-compatibility-mode/)
- [grafana/k6-rollup-example](https://github.com/grafana/k6-rollup-example)