# BrightSteps Kids Learning Games

BrightSteps is a mobile-friendly learning game app for children ages 1 to 9. It includes 18 short activities across colors, shapes, counting, letters, logic, memory, math, reading, science, emotions, time, and vocabulary.

## Run Locally

```sh
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174`.

## Build For iOS And Android

This project is ready for Capacitor packaging.

```sh
npm install
npm run build
npx cap add ios
npx cap add android
npx cap sync
```

Open the native projects:

```sh
npx cap open ios
npx cap open android
```

For App Store and Play Store release, replace `icon.svg` with full platform icon and splash assets, then run the Capacitor asset generation flow you prefer.
