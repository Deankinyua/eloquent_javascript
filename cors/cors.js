// * In this request, the server hosting elixir-lang.org sends the response
// * with the access-control-allow-origin response header set to "*"
// * Therefore, we will get the html response back

const request = new Request("https://elixir-lang.org", {
  method: "GET",
});

// ? NOTE
// By default the mode is 'cors' meaning CORS will be fully functional
// I tried setting it to 'no-cors' but it seems it doesn't change anything really

// console.log(request.mode) => returns 'cors'

console.log(request);

fetch(request)
  .then((resp) => resp.text())
  .then(console.log);

fetch("https://elixir-lang.org", { method: "GET" })
  .then((resp) => resp.text())
  .then(console.log);

// * The fetch API is integrated with modern browser features including CORS
// * so the same rules applying in the browser apply in Node.JS

// * This request will fail since the skeptic.bot server does not set access-control-allow-origin
fetch("https://skeptic.bot/questions/bbebcf5e-c6a4-4b40-807d-ae1b797abaf8", {
  method: "GET",
})
  .then((resp) => resp.text())
  .then(console.log);

// ? Something to note is that if the browser sends the preflight request
// ? (this will be sent if the original request is a complex request) to check if
// ? the server understands CORS and the server does not respond to the preflight request
// ? with the appropriate CORS headers, the real request will NEVER be sent
