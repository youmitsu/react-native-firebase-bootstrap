# react-native-firebase-bootstrap

## setup (when project created)

### 1. set GitHubActions secrets

- Set firebase token as `FIREBASE_TOKEN`
  - You can get this with `firebase login:ci` command.
- Set slack incoming webhook url as `SLACK_INCOMING_WEBHOOK_URL`

### 2. iOS setup

#### 2.1. Apple Developer setup

**2.1.1. create AppleDeveloper program**

**2.1.2. create Identifier**

- https://developer.apple.com/account/resources/certificates/list

**2.1.3. set test devices**

- https://developer.apple.com/account/resources/devices/list

#### 2.2 fastlane match

**2.2.1. init**

```console
cd projects/app
bundle install

cd ios
bundle exec fastlane match init
```

**2.2.2. create profile, certificate of appstore**

```console
cd projects/app/ios
bundle exec fastlane match appstore
```

#### 2.3. set AppIcon

#### 3. Android setup

TBD

## usage

### app start in locally

```console
yarn
cd projects/app/ios
pod install

yarn start:app:ios:dev # ios
yarn start:app:android:dev # android
```
