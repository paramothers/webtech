const request = require("request");
const yargs = require("yargs");

const argv = yargs.options({
  a: {
    demand:true,
    alias:'address',
    description: 'Address to fetch weather for'
  }
});


request({
  url: "https://idratherbewriting.com/learnapidoc/contact.html",
  json:true
}, (error, response, body) => {
  // console.log("error", error);
  // console.log("response", response);
  console.log("error", JSON.stringify(error));
});
