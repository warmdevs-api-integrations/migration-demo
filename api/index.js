// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({ token: process.env.STDLIB_SECRET_TOKEN });

export default function (request, result) {
  // you can write whatever javascript you'd like
  // logs are visible from the [? Help] popup on right
  for (let i = 0; i < 10; i++) {
    console.log(`A log! ${i}`);
  }

  // `context` is automatically populated with HTTP request data
  // you can modify `context.params` test data via [Payload] below
  let message = `hello ${'World'}`;

  // endpoints are executed as functions, click [> Run] below to test
  return result.send(message);
}
