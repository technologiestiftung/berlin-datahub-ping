# Ping the Berlin DataHub

This repo is meant as a public documentation and collection of tools to help us during development.

## Setup

```bash
git clone <THIS REPOS GITHUB URL>
npm ci
```

## Run

Execute the script that connects to the MQTT broker of the TTN.

Your first need to populate a `.env` file with the values provided in `.env.example`.

The `TTN_USER` is your application id and the `TTN_PASSWORD` is the access key you can find in your application.

Then you can connect to your devices. See the content of `src/index.ts` for a deeper dive.

```bash
npm run dev
```

## Notes

When installing the `node_modules` for this repo you get a `mqtt` as a command line tool.

You can run it using these commands:


```bash
npx mqtt
```

To subscribe in the command line to the uplink of one of your devices you can do the following.

```bash
npx mqtt subscribe \
  --hostname  eu.thethings.network \
  --port 1883 --username berlin-datahub-ping \
  --password 'ttn-account-v2.123-abc-YOUR-APPS-ACCESS-KEY-' \
  --topic 'berlin-datahub-ping/devices/berlin-datahub-ping-001/up' \
```

See the [documentation](https://www.thethingsnetwork.org/docs/applications/mqtt/api.html) for all possible MQTT topics.

