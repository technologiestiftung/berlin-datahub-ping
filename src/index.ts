import "dotenv/config";
import mqtt = require("mqtt");
const TTN_HOST = process.env.TTN_HOST || "eu.thethings.network";
const TTN_PORT = process.env.TTN_PORT || 1883;
const TTN_USER = process.env.TTN_USER;
const TTN_PASSWORD = process.env.TTN_PASSWORD;
const TTN_APP_ID = process.env.TTN_APP_ID;
const TTN_DEVICES_ID = process.env.TTN_DEVICES_ID;

if (!TTN_USER) throw new Error("TTN_USER is not defined");
if (!TTN_PASSWORD) throw new Error("TTN_PASSWORD is not defined");
if (!TTN_APP_ID) throw new Error("TTN_APP_ID is not defined");
if (!TTN_DEVICES_ID) throw new Error("TTN_DEVICES_ID is not defined");

const client = mqtt.connect(`mqtt://${TTN_HOST}:${TTN_PORT}`, {
  username: TTN_USER,
  password: TTN_PASSWORD,
});

client.on("connect", function () {
  client.subscribe(`${TTN_APP_ID}/devices/${TTN_DEVICES_ID}/up`, function (
    err
  ) {
    if (!err) {
      console.log("subscribed");
    } else {
      console.error(err);
    }
  });
});

client.on("message", function (topic, message) {
  console.log(topic);
  // message is Buffer
  console.log(message.toString());
  client.end();
  process.exit(0);
});
