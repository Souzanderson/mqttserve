import mqtt from "mqtt";

const connect = () => {
  const client = mqtt.connect(
    `mqtt://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`,
    {
      clientId: process.env.MQTT_CLIENT_ID,
      clean: true,
      connectTimeout: 4000,
      reconnectPeriod: 1000,
    }
  );
  return client;
};

export const MqttConnect = (topic: string) => {
  const client = connect();
  client.on("connect", () => {
    client.subscribe(topic, (err) => {
      if (!err) {
        client.publish(topic, "teste de mensagem de inicio!");
      }
    });
  });

  client.on("message", function (topic_subscriber, payload) {
    console.log("Received Message:", topic, payload.toString());
  });
};

export const MqttSend = (topic: string, message: string) => {
  const client = connect();
  client.publish(topic, message);
};
