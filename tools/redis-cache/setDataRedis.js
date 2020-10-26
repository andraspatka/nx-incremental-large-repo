const redis = require("redis");

const client = redis.createClient(
    {url: "//localhost:6379"}
);

client.on("error", function(error) {
  console.error(error);
});




client.get("data", redis.print);

client.quit();