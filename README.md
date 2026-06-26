# BrightSteps Kids Learning Games

BrightSteps is a mobile-friendly early learning game app for children ages 1 to 9. It is built for early learning and playful practice, with quick rounds, animated action games, and longer quest-style activities that help kids stay curious while practicing core skills.

The app includes games for colors, shapes, counting, letters, logic, memory, math, reading, science, emotions, time, and vocabulary. It is designed as a privacy-first browser app that can also be packaged for iOS and Android with Capacitor.

## Features

- Age-based game groups for kids 1-3, 4-6, and 7-9.
- Color, shape, counting, alphabet, spelling, math, time, memory, puzzle, music, and runner games.
- Daily learning path, stars, milestones, and local progress tracking.
- Parent area with privacy policy, reset progress, settings, and certificate support.
- Optional child name greeting stored locally on the device.
- Offline-friendly browser build with local storage.
- iOS and Android packaging through Capacitor.

## Screenshots

Add screenshots or a short GIF here before pinning the repository on GitHub. Good examples:

- Home/game library screen.
- A colorful game screen.
- Parent dashboard.
- Mobile/tablet view.

## Mascot

BrightSteps uses an original code-drawn mascot for success and try-again feedback. Success shows a happy celebration animation, while try-again shows a gentle sad/blinking expression.

## GitHub Repo Setup

Suggested repository description:

```text
Mobile-friendly early learning games for kids with colors, letters, counting, logic, memory, and math.
```

Suggested topics:

```text
kids-learning, early-learning, educational-games, children, html-css-javascript, pwa, capacitor, android, ios, privacy-first
```

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
