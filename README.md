# MQTT SERVE FOR REAL TIME NOTIFICATIONS

* This project is created for generate a notification server.
* Generate node_modules:
    ```bat
    yarn install
    ```

    or:

    ```bat
    npm install
    ```

* Create .env file on root and add lines:

    ```config
    MQTT_HOST=<hostmqttserver>
    MQTT_PORT=1883
    MQTT_CLIENT_ID=NodeMqtt
    TOLKEN_EXPRESS=token_for_security_authentication
    VERSION=1.0.0
    ```

* Run dev project:

    ```bat
    yarn dev
    ```
    or:

    ```bat
    npm run dev
    ```

* Build project in dist directory:

    ```bat
    yarn build
    ```
    or:

    ```bat
    npm run build
    ```