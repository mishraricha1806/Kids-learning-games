# BrightSteps Store Readiness

## AdMob

Publisher ID added for app-ads.txt:

```text
google.com, pub-6891097107739732, DIRECT, f08c47fec0942fa0
```

Live AdMob ads still need these values from the AdMob console:

```text
Android app ID: ca-app-pub-6891097107739732~XXXXXXXXXX
iOS app ID: ca-app-pub-6891097107739732~XXXXXXXXXX
Banner/interstitial ad unit IDs: ca-app-pub-6891097107739732/XXXXXXXXXX
```

This app targets children, so ad requests should be configured as child-directed with maximum ad content rating `G` before live ads are enabled.

## Android Upload

Current app ID:

```text
com.brightsteps.learninggames
```

Android can build a debug APK locally. For Play Store upload, create a private upload keystore and build a signed release AAB.

## iOS Upload

Current bundle ID:

```text
com.brightsteps.learninggames
```

The iOS project has current web assets copied. A full App Store build requires full Xcode selected on this Mac, an Apple Developer team, signing certificates, and App Store Connect app setup.
