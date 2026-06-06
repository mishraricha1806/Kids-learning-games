# BrightSteps Kids Learning Games

BrightSteps is a mobile-friendly learning game app for children ages 1 to 9. It includes quick rounds, animated action games, and longer quest-style activities across colors, shapes, counting, letters, logic, memory, math, reading, science, emotions, time, and vocabulary.

Success and try-again feedback use a code-drawn Shaurya smiley character, not a photo asset. Success shows a big happy smile animation; try-again shows a sad expression with blinking eyes.

## Run Locally

```sh
python3 -m http.server 4174
```

Then open `http://127.0.0.1:4174`.

## Build For iOS And Android

This project uses Capacitor and now includes native Android and iOS project folders.

```sh
npm install
npm run build
npx cap sync
```

Android debug APK:

```sh
cd android
JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home ./gradlew assembleDebug
```

The debug APK is created at:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Open the native projects:

```sh
npx cap open ios
npx cap open android
```

iOS note: this Mac needs full Xcode installed and selected before the iOS project can complete CocoaPods/Xcode build steps. CocoaPods is installed, and the iOS project has the latest web assets copied.

For App Store and Play Store release, replace `icon.svg` with full platform icon and splash assets, then run the Capacitor asset generation flow you prefer.
