import express from "express";
import bodyparser from "body-parser";
import { MqttSend } from "./mqtt_client";

const app = express();
const port = 8080;

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send({
    name: "API MQTT SERVER",
    version: process.env.VERSION,
  });
});

app.post("/sendmessage", (req, res) => {
  let js = req.body;
  if (js.hashcode === process.env.TOLKEN_EXPRESS) {
    MqttSend(js.topic, JSON.stringify(js.message));
    js.message.send = true;
    res.send(js.message);
  } else {
    const error = {
      error: "Authentication Error!",
      code: 401,
    };
    res.send(error);
  }
});

export const serverInit = () => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
};
