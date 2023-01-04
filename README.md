# react-native-firebase-bootstrap

## required GitHubActions secrets

- Set firebase token as `FIREBASE_TOKEN`
  - You can get this with `firebase login:ci` command.
- Set slack incoming webhook url as `SLACK_INCOMING_WEBHOOK_URL`
- Set github username as `USERNAME`
  - https://github.com/{yourname}
- Set AppStoreConnect key as `ASC_KEY_CONTENT`
  - TODO: how to get this
- Set fastlane match password as `MATCH_PASSWORD`
  - You can get it when fastlane match setup
- Set your github access token as `PERSONAL_GITHUB_ACCESS_TOKEN`
  - You can get [here](https://github.com/settings/tokens?type=beta)

## setup (when project created)

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

#### 3. Android setup

TBD

## development

### common schema

You can use common firestore schema across app and functions.

[schema](./common/firestore)

**example（functions）**

```
import * as FirestoreType from "../../../../common/firestore";
import { userConverter } from "../utils/converter";

export const service = async () => {
  const snapshot = await firestore()
    .collection("users")
    .withConverter<FirestoreType.User.Schema>(userConverter)
    .doc("hoge")
    .get();
  const data = snapshot.data();
  if (data !== undefined) {
    // This data is validated and typed by User schema.
    console.log("name", data.name);
  }
}
```

### app start

```console
yarn
cd projects/app/ios
pod install

yarn start:app:ios:dev # ios
yarn start:app:android:dev # android
```

### firebase functions

```console
yarn fix:functions # eslint --fix
yarn lint:functions # eslint
yarn test:functions # unit testing
```

### firebase deploy

```console
yarn deploy:firebase
```

## preset CI workflow

### PR to `main` branch

- eslint fix, check
- unit testing（jest）

### branch pushed on `main`

- deploy firebase to dev environment
- eslint fix, check
- unit testing（jest）

### `v*` tags pushed

- deploy firebase to prod environment
- deploy app to TestFlight
