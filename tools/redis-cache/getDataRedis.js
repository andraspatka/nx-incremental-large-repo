const fs  = require('fs') 
const redis = require("redis");

const client = redis.createClient(
    {url: "//localhost:6379"}
);

client.on("error", function(error) {
  console.error(error);
});

client.get("data", (err, data) => {
    fs.writeFile('redisdata.txt', data, (error) => { 
        if (error) throw err; 
    }) 
});

client.quit();
  
