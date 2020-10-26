const redis = require("redis");
const archiver = require('archiver');
const fs = require('fs');


zipDirectory("testdata", "testdata.zip")
    .then(() => {
        console.log(getBase64('testdata.zip'));
    })
    .catch(() => {
        console.log("Error while zipping");
    })
    .finally(() => {
        console.log("Finally");
    });


/**
 * @param {String} source
 * @param {String} out
 * @returns {Promise}
 */
function zipDirectory(source, out) {
    const archive = archiver('zip', { zlib: { level: 9 }});
    const stream = fs.createWriteStream(out);
  
    return new Promise((resolve, reject) => {
        // TODO: APA promise does not get rejected if the directory does not exist.
      archive
        .directory(source, false)
        .on('error', err => reject(err))
        .pipe(stream)
      ;
  
      stream.on('close', () => resolve());
      archive.finalize();
    });
  }

function getBase64(file) {
    const data = fs.readFileSync(file);
    let buff = new Buffer.from(data);
    return buff.toString('base64');
}
/*
const client = redis.createClient(
    {url: "//localhost:6379"}
);

client.on("error", function(error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);
*/